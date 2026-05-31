const MODELS_URL = "assets/models";

const EMOTION_LABELS = {
  happy: "Alegría",
  sad: "Tristeza",
  angry: "Enojo",
  surprised: "Sorpresa",
  neutral: "Neutralidad",
  fearful: "Miedo",
  disgusted: "Disgusto",
};

const DISPLAY_ORDER = ["happy", "sad", "angry", "surprised", "neutral"];

const video = document.getElementById("video");
const imagePreview = document.getElementById("imagePreview");
const statusEl = document.getElementById("status");
const emotionLabelEl = document.getElementById("emotionLabel");
const confidenceValueEl = document.getElementById("confidenceValue");
const resultSourceEl = document.getElementById("resultSource");
const barsEl = document.getElementById("bars");

const btnStartCamera = document.getElementById("btnStartCamera");
const btnStopCamera = document.getElementById("btnStopCamera");
const btnAnalyzeCamera = document.getElementById("btnAnalyzeCamera");
const imageInput = document.getElementById("imageInput");
const emotionButtons = document.querySelectorAll(".emotion-btn");

let stream = null;
let analysisTimer = null;
let isAnalyzing = false;
let modelsLoaded = false;

function setStatus(message) {
  statusEl.textContent = message;
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function clearBars() {
  barsEl.innerHTML = "";
}

function renderBars(expressions) {
  clearBars();

  DISPLAY_ORDER.forEach((key) => {
    const value = expressions?.[key] ?? 0;

    const row = document.createElement("div");
    row.className = "space-y-2";

    row.innerHTML = `
      <div class="flex justify-between text-sm">
        <span>${EMOTION_LABELS[key]}</span>
        <span>${formatPercent(value)}</span>
      </div>
      <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div class="h-full bg-brand-gold rounded-full" style="width:${Math.max(0, Math.min(100, value * 100))}%"></div>
      </div>
    `;

    barsEl.appendChild(row);
  });
}

function renderResult(label, confidence, source, expressions = null) {
  emotionLabelEl.textContent = label;
  confidenceValueEl.textContent = formatPercent(confidence);
  resultSourceEl.textContent = source;

  if (expressions) {
    renderBars(expressions);
  } else {
    clearBars();
  }
}

async function loadModels() {
  if (modelsLoaded) return;

  setStatus("Cargando modelos de IA...");

  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_URL),
    faceapi.nets.faceExpressionNet.loadFromUri(MODELS_URL),
  ]);

  modelsLoaded = true;
  setStatus("Modelos cargados. Ya puedes usar la cámara o subir una imagen.");
}

async function analyzeElement(element, sourceText = "Análisis automático") {
  const detection = await faceapi
    .detectSingleFace(
      element,
      new faceapi.TinyFaceDetectorOptions({
        inputSize: 224,
        scoreThreshold: 0.5,
      })
    )
    .withFaceExpressions();

  if (!detection) {
    renderResult("No se detectó rostro", 0, sourceText, null);
    setStatus("No se encontró un rostro claro.");
    return;
  }

  const expressions = detection.expressions;
  const entries = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
  const [bestKey, bestValue] = entries[0];

  renderResult(
    EMOTION_LABELS[bestKey] ?? "Emoción desconocida",
    bestValue,
    sourceText,
    expressions
  );

  setStatus("Análisis completado.");
}

async function startCamera() {
  await loadModels();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setStatus("Tu navegador no soporta acceso a cámara.");
    return;
  }

  try {
    stopCamera(false);

    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    video.hidden = false;
    imagePreview.classList.add("hidden");
    video.srcObject = stream;
    await video.play();

    setStatus("Cámara activa. Puedes analizar en vivo o presionar 'Analizar cámara'.");

    clearInterval(analysisTimer);
    analysisTimer = setInterval(async () => {
      if (video.readyState >= 2 && !isAnalyzing) {
        isAnalyzing = true;
        try {
          await analyzeElement(video, "Análisis en vivo");
        } finally {
          isAnalyzing = false;
        }
      }
    }, 1200);
  } catch (error) {
    console.error(error);
    setStatus("No se pudo activar la cámara. Revisa permisos, HTTPS o localhost.");
  }
}

function stopCamera(updateMessage = true) {
  if (analysisTimer) {
    clearInterval(analysisTimer);
    analysisTimer = null;
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }

  video.srcObject = null;

  if (updateMessage) {
    setStatus("Cámara detenida.");
  }
}

btnStartCamera.addEventListener("click", startCamera);

btnStopCamera.addEventListener("click", () => {
  stopCamera();
});

btnAnalyzeCamera.addEventListener("click", async () => {
  await loadModels();

  if (!stream) {
    setStatus("Primero activa la cámara.");
    return;
  }

  await analyzeElement(video, "Análisis manual de cámara");
});

imageInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  await loadModels();
  stopCamera(false);

  const objectUrl = URL.createObjectURL(file);

  video.hidden = true;
  imagePreview.classList.remove("hidden");
  imagePreview.src = objectUrl;

  imagePreview.onload = async () => {
    try {
      await analyzeElement(imagePreview, "Análisis de imagen");
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  };
});

emotionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const emotionKey = button.dataset.emotion;

    renderResult(
      EMOTION_LABELS[emotionKey] ?? "Emoción",
      1,
      "Selección manual",
      null
    );

    setStatus("Seleccionaste una emoción manualmente.");
  });
});

window.addEventListener("beforeunload", () => {
  stopCamera(false);
});

(async function init() {
  try {
    await loadModels();
    renderResult("—", 0, "Sin análisis", null);
  } catch (error) {
    console.error(error);
    setStatus("Error al cargar modelos. Revisa la ruta de /assets/models.");
  }
})();