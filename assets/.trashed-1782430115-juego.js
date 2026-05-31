const QUESTIONS_PER_GAME = 20;
const POINTS_BASE = 10;
const TIMER_WARNING_SECONDS = 5;
const ANSWER_REVEAL_DELAY = 1200;
const LOADING_STEP_DELAY = 50;

const DIFFICULTY_SETTINGS = {
  facil: { label: "Fácil", seconds: 20, multiplier: 1 },
  medio: { label: "Media", seconds: 15, multiplier: 1.25 },
  dificil: { label: "Difícil", seconds: 12, multiplier: 1.5 }
};

const QUESTION_POOL = [
  {
    pregunta: "¿Qué significa CPU en informática?",
    opciones: ["Central Processing Unit", "Computer Power User", "Core Program Utility", "Central Print Unit"],
    respuestaCorrecta: 0,
    categoria: "Tecnología",
    nivel: 1
  },
  {
    pregunta: "¿Cuál de estos es un sistema operativo?",
    opciones: ["Python", "Linux", "HTML", "SQL"],
    respuestaCorrecta: 1,
    categoria: "Tecnología",
    nivel: 1
  },
  {
    pregunta: "¿Qué componente almacena datos permanentemente?",
    opciones: ["RAM", "Procesador", "Disco duro", "Ventilador"],
    respuestaCorrecta: 2,
    categoria: "Tecnología",
    nivel: 1
  },
  {
    pregunta: "¿Qué significa IA?",
    opciones: ["Internet Avanzado", "Inteligencia Artificial", "Interfaz Administrativa", "Integración Analógica"],
    respuestaCorrecta: 1,
    categoria: "Tecnología",
    nivel: 1
  },
  {
    pregunta: "¿Qué dispositivo permite imprimir documentos?",
    opciones: ["Monitor", "Router", "Impresora", "Teclado"],
    respuestaCorrecta: 2,
    categoria: "Tecnología",
    nivel: 1
  },
  {
    pregunta: "¿Qué lenguaje se usa principalmente para estilos web?",
    opciones: ["HTML", "CSS", "Python", "Java"],
    respuestaCorrecta: 1,
    categoria: "Programación",
    nivel: 1
  },
  {
    pregunta: "¿Cuál es el propósito de HTML?",
    opciones: ["Diseñar bases de datos", "Crear estructura web", "Crear videojuegos", "Programar robots"],
    respuestaCorrecta: 1,
    categoria: "Programación",
    nivel: 1
  },
  {
    pregunta: "¿Qué símbolo se usa para comentarios de una línea en JavaScript?",
    opciones: ["<!-- -->", "//", "##", "**"],
    respuestaCorrecta: 1,
    categoria: "Programación",
    nivel: 1
  },
  {
    pregunta: "¿Qué estructura almacena múltiples datos?",
    opciones: ["String", "Array", "Boolean", "Float"],
    respuestaCorrecta: 1,
    categoria: "Programación",
    nivel: 2
  },
  {
    pregunta: "¿Qué palabra se usa para una condición en JavaScript?",
    opciones: ["loop", "for", "if", "html"],
    respuestaCorrecta: 2,
    categoria: "Programación",
    nivel: 1
  },
  {
    pregunta: "¿Qué significa IP?",
    opciones: ["Internet Protocol", "Internal Process", "Input Port", "Integrated Platform"],
    respuestaCorrecta: 0,
    categoria: "Redes",
    nivel: 1
  },
  {
    pregunta: "¿Cuál dispositivo conecta varias redes?",
    opciones: ["Router", "Teclado", "Scanner", "Micrófono"],
    respuestaCorrecta: 0,
    categoria: "Redes",
    nivel: 1
  },
  {
    pregunta: "¿Qué servicio traduce dominios a direcciones IP?",
    opciones: ["DNS", "HTTP", "FTP", "SMTP"],
    respuestaCorrecta: 0,
    categoria: "Redes",
    nivel: 2
  },
  {
    pregunta: "¿Qué tipo de red cubre un área pequeña como un laboratorio?",
    opciones: ["WAN", "LAN", "MAN", "PAN"],
    respuestaCorrecta: 1,
    categoria: "Redes",
    nivel: 1
  },
  {
    pregunta: "¿Qué protocolo se usa para navegar de forma segura?",
    opciones: ["HTTP", "HTTPS", "FTP", "TELNET"],
    respuestaCorrecta: 1,
    categoria: "Redes",
    nivel: 2
  },
  {
    pregunta: "¿Qué lenguaje se usa comúnmente para consultar bases de datos?",
    opciones: ["HTML", "SQL", "CSS", "BASH"],
    respuestaCorrecta: 1,
    categoria: "Base de datos",
    nivel: 1
  },
  {
    pregunta: "¿Qué es una clave primaria?",
    opciones: ["Una contraseña", "Un identificador único para cada registro", "Un tipo de tabla", "Un formato de archivo"],
    respuestaCorrecta: 1,
    categoria: "Base de datos",
    nivel: 1
  },
  {
    pregunta: "¿Qué comando se usa para obtener datos en SQL?",
    opciones: ["GET", "SELECT", "PULL", "READ"],
    respuestaCorrecta: 1,
    categoria: "Base de datos",
    nivel: 1
  },
  {
    pregunta: "¿Qué representa una tabla en una base de datos relacional?",
    opciones: ["Un archivo comprimido", "Una colección de registros", "Un antivirus", "Un sistema operativo"],
    respuestaCorrecta: 1,
    categoria: "Base de datos",
    nivel: 1
  },
  {
    pregunta: "¿Qué operación combina datos de dos tablas relacionadas?",
    opciones: ["JOIN", "COPY", "MERGE", "SORT"],
    respuestaCorrecta: 0,
    categoria: "Base de datos",
    nivel: 2
  },
  {
    pregunta: "Completa la serie: 1, 2, 4, 8, ___",
    opciones: ["10", "12", "16", "18"],
    respuestaCorrecta: 2,
    categoria: "Lógica",
    nivel: 1
  },
  {
    pregunta: "Si todos los gatos son animales y Tom es un gato, entonces Tom es:",
    opciones: ["Un perro", "Un animal", "Un humano", "Un robot"],
    respuestaCorrecta: 1,
    categoria: "Lógica",
    nivel: 1
  },
  {
    pregunta: "¿Qué número sigue? 5, 10, 15, 20, ___",
    opciones: ["22", "24", "25", "30"],
    respuestaCorrecta: 2,
    categoria: "Lógica",
    nivel: 1
  },
  {
    pregunta: "Si ayer fue domingo, hoy es:",
    opciones: ["Sábado", "Lunes", "Martes", "Viernes"],
    respuestaCorrecta: 1,
    categoria: "Lógica",
    nivel: 1
  },
  {
    pregunta: "¿Cuál figura tiene 3 lados?",
    opciones: ["Círculo", "Cuadrado", "Triángulo", "Pentágono"],
    respuestaCorrecta: 2,
    categoria: "Lógica",
    nivel: 1
  },
  {
    pregunta: "¿Qué herramienta ayuda a organizar tareas académicas?",
    opciones: ["Calendario", "Videojuego", "Consola", "Altavoz"],
    respuestaCorrecta: 0,
    categoria: "Vida universitaria",
    nivel: 1
  },
  {
    pregunta: "¿Qué habilidad es importante para exposiciones?",
    opciones: ["Comunicación", "Dormir", "Improvisar siempre", "Ignorar preguntas"],
    respuestaCorrecta: 0,
    categoria: "Vida universitaria",
    nivel: 1
  },
  {
    pregunta: "¿Qué suele hacerse en una biblioteca universitaria?",
    opciones: ["Jugar fútbol", "Estudiar e investigar", "Dormir", "Conducir"],
    respuestaCorrecta: 1,
    categoria: "Vida universitaria",
    nivel: 1
  },
  {
    pregunta: "¿Qué es el trabajo colaborativo?",
    opciones: ["Trabajar solo", "Trabajar en equipo", "Evitar responsabilidades", "Copiar tareas"],
    respuestaCorrecta: 1,
    categoria: "Vida universitaria",
    nivel: 1
  },
  {
    pregunta: "¿Qué acción demuestra responsabilidad universitaria?",
    opciones: ["Entregar tareas a tiempo", "Copiar exámenes", "Faltar frecuentemente", "Ignorar proyectos"],
    respuestaCorrecta: 0,
    categoria: "Vida universitaria",
    nivel: 1
  },
  {
    pregunta: "¿Cuál es la capital de Ecuador?",
    opciones: ["Guayaquil", "Quito", "Cuenca", "Loja"],
    respuestaCorrecta: 1,
    categoria: "Cultura general",
    nivel: 1
  },
  {
    pregunta: "¿Qué planeta es conocido como el planeta rojo?",
    opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
    respuestaCorrecta: 1,
    categoria: "Cultura general",
    nivel: 1
  },
  {
    pregunta: "¿Cuántos continentes existen en la Tierra?",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: 2,
    categoria: "Cultura general",
    nivel: 1
  },
  {
    pregunta: "¿Qué idioma se habla principalmente en Brasil?",
    opciones: ["Español", "Francés", "Portugués", "Italiano"],
    respuestaCorrecta: 2,
    categoria: "Cultura general",
    nivel: 1
  },
  {
    pregunta: "¿Cuál es el océano más grande del planeta?",
    opciones: ["Atlántico", "Pacífico", "Índico", "Ártico"],
    respuestaCorrecta: 1,
    categoria: "Cultura general",
    nivel: 1
  }
];

const dom = {
  loadingScreen: document.getElementById("loadingScreen"),
  loadingFill: document.getElementById("loadingFill"),
  loadingText: document.getElementById("loadingText"),
  startScreen: document.getElementById("startScreen"),
  gameScreen: document.getElementById("gameScreen"),
  endScreen: document.getElementById("endScreen"),
  startButton: document.getElementById("startBtn"),
  restartButton: document.getElementById("restartBtn"),
  playerNameInput: document.getElementById("playerName"),
  difficultySelect: document.getElementById("difficultySelect"),
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  playerLabel: document.getElementById("playerLabel"),
  difficultyLabel: document.getElementById("difficultyLabel"),
  scoreValue: document.getElementById("scoreValue"),
  levelValue: document.getElementById("levelValue"),
  remainingValue: document.getElementById("remainingValue"),
  timeValue: document.getElementById("timeValue"),
  timerRing: document.getElementById("timerRing"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  categoryTag: document.getElementById("categoryTag"),
  roundTag: document.getElementById("roundTag"),
  questionText: document.getElementById("questionText"),
  feedbackText: document.getElementById("feedbackText"),
  optionsGrid: document.getElementById("optionsGrid"),
  finalScore: document.getElementById("finalScore"),
  finalLevel: document.getElementById("finalLevel"),
  finalHits: document.getElementById("finalHits"),
  finalMisses: document.getElementById("finalMisses"),
  rankTitle: document.getElementById("rankTitle"),
  rankMessage: document.getElementById("rankMessage"),
  confettiLayer: document.getElementById("confettiLayer")
};

const gameState = {
  playerName: "Invitado",
  difficultyKey: "medio",
  soundEnabled: true,
  isActive: false,
  isLocked: false,
  questions: [],
  currentIndex: 0,
  currentQuestion: null,
  timer: 0,
  timerId: null,
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  answered: 0
};

function shuffleItems(items) {
  const cloned = [...items];

  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[randomIndex]] = [cloned[randomIndex], cloned[index]];
  }

  return cloned;
}

function getDifficultyConfig() {
  return DIFFICULTY_SETTINGS[gameState.difficultyKey] ?? DIFFICULTY_SETTINGS.medio;
}

function getSelectedQuestions() {
  return shuffleItems(QUESTION_POOL).slice(0, Math.min(QUESTIONS_PER_GAME, QUESTION_POOL.length));
}

function switchScreen(activeScreen) {
  [dom.startScreen, dom.gameScreen, dom.endScreen].forEach((screen) => {
    screen.classList.remove("active");
  });

  activeScreen.classList.add("active");
}

function updateSoundButton() {
  dom.soundToggleBtn.textContent = gameState.soundEnabled ? "🔊 Efectos: ON" : "🔇 Efectos: OFF";
}

function syncTimerView() {
  dom.timeValue.textContent = String(gameState.timer);
}

function updateTimerRing() {
  const maxSeconds = getDifficultyConfig().seconds;
  const progress = (gameState.timer / maxSeconds) * 100;

  dom.timerRing.style.setProperty("--p", String(progress));
  dom.timerRing.classList.toggle("danger", gameState.timer <= TIMER_WARNING_SECONDS);
}

function updateProgress() {
  const totalQuestions = gameState.questions.length || 1;
  const progressPercent = (gameState.currentIndex / totalQuestions) * 100;

  dom.progressFill.style.width = `${progressPercent}%`;
  dom.progressText.textContent = `${Math.round(progressPercent)}%`;
  dom.remainingValue.textContent = String(Math.max(0, totalQuestions - gameState.currentIndex));
  dom.levelValue.textContent = String(getCurrentLevel());
}

function updateScoreboard() {
  dom.scoreValue.textContent = String(gameState.score);
  updateProgress();
}

function getCurrentLevel() {
  return Math.floor(gameState.answered / 5) + 1;
}

function clearQuestionTimer() {
  if (gameState.timerId) {
    clearInterval(gameState.timerId);
    gameState.timerId = null;
  }
}

function playFeedbackTone(frequency, duration, type = "sine") {
  if (!gameState.soundEnabled) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.06;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
    oscillator.onended = () => audioContext.close();
  } catch {
    // Se omite en navegadores limitados.
  }
}

function spawnConfetti() {
  dom.confettiLayer.innerHTML = "";

  const totalPieces = 70;
  const palette = ["#2dd36f", "#ffffff", "#cc2433"];

  for (let index = 0; index < totalPieces; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";

    const size = Math.random() * 8 + 6;
    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 2.2 + 2.2;

    piece.style.left = `${left}vw`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size + Math.random() * 10}px`;
    piece.style.background = palette[Math.floor(Math.random() * palette.length)];
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.transform = `translateY(-20px) rotate(${Math.random() * 180}deg)`;

    dom.confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    dom.confettiLayer.innerHTML = "";
  }, 5000);
}

function resetRoundState() {
  clearQuestionTimer();

  gameState.questions = getSelectedQuestions();
  gameState.currentIndex = 0;
  gameState.currentQuestion = null;
  gameState.timer = getDifficultyConfig().seconds;
  gameState.score = 0;
  gameState.correctAnswers = 0;
  gameState.wrongAnswers = 0;
  gameState.answered = 0;
  gameState.isLocked = false;
  gameState.isActive = true;

  dom.scoreValue.textContent = "0";
  dom.levelValue.textContent = "1";
  dom.remainingValue.textContent = String(gameState.questions.length);
  dom.timeValue.textContent = String(getDifficultyConfig().seconds);
  dom.timerRing.style.setProperty("--p", "100");
  dom.progressFill.style.width = "0%";
  dom.progressText.textContent = "0%";
  dom.feedbackText.textContent = "";
  dom.feedbackText.className = "feedback-text";
  dom.difficultyLabel.textContent = getDifficultyConfig().label;
  dom.questionText.textContent = "";
  dom.optionsGrid.innerHTML = "";
}

function startGame() {
  gameState.playerName = dom.playerNameInput.value.trim() || "Invitado";
  gameState.difficultyKey = dom.difficultySelect.value || "medio";

  dom.playerLabel.textContent = gameState.playerName;
  dom.difficultyLabel.textContent = getDifficultyConfig().label;

  resetRoundState();
  switchScreen(dom.gameScreen);
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  if (!gameState.isActive) return;

  if (gameState.currentIndex >= gameState.questions.length) {
    finishGame();
    return;
  }

  gameState.isLocked = false;
  gameState.currentQuestion = gameState.questions[gameState.currentIndex];
  gameState.timer = getDifficultyConfig().seconds;

  dom.questionText.textContent = gameState.currentQuestion.pregunta;
  dom.categoryTag.textContent = gameState.currentQuestion.categoria;
  dom.roundTag.textContent = `Ronda ${gameState.currentIndex + 1} de ${gameState.questions.length}`;
  dom.feedbackText.textContent = "";
  dom.feedbackText.className = "feedback-text";

  renderAnswerButtons(gameState.currentQuestion);
  updateRoundUI();
  startQuestionTimer();
}

function renderAnswerButtons(question) {
  dom.optionsGrid.innerHTML = "";

  question.opciones.forEach((optionText, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-btn";
    optionButton.textContent = optionText;
    optionButton.addEventListener("click", () => handleAnswer(optionIndex, optionButton));
    dom.optionsGrid.appendChild(optionButton);
  });
}

function startQuestionTimer() {
  clearQuestionTimer();
  syncTimerView();
  updateTimerRing();

  gameState.timerId = window.setInterval(() => {
    gameState.timer -= 1;
    syncTimerView();
    updateTimerRing();

    if (gameState.timer <= 0) {
      clearQuestionTimer();
      handleTimeout();
    }
  }, 1000);
}

function lockAnswerButtons() {
  const answerButtons = [...dom.optionsGrid.querySelectorAll(".option-btn")];

  answerButtons.forEach((button) => {
    button.classList.add("disabled");
    button.disabled = true;
  });

  return answerButtons;
}

function showFeedback(message, variant = "neutral") {
  dom.feedbackText.textContent = message;
  dom.feedbackText.className = "feedback-text";

  if (variant === "good") dom.feedbackText.classList.add("good");
  if (variant === "bad") dom.feedbackText.classList.add("bad");
  if (variant === "warn") dom.feedbackText.classList.add("warn");
}

function updateRoundUI() {
  syncTimerView();
  updateTimerRing();
  updateScoreboard();
}

function calculateQuestionPoints() {
  const difficulty = getDifficultyConfig();
  const timeBonus = Math.max(0, Math.min(6, Math.ceil(gameState.timer / 3)));
  return Math.round((POINTS_BASE + timeBonus) * difficulty.multiplier);
}

function goToNextQuestion() {
  gameState.currentIndex += 1;
  updateScoreboard();

  if (gameState.currentIndex >= gameState.questions.length) {
    finishGame();
    return;
  }

  renderCurrentQuestion();
}

function scheduleNextQuestion() {
  window.setTimeout(() => {
    goToNextQuestion();
  }, ANSWER_REVEAL_DELAY);
}

function handleAnswer(selectedIndex, selectedButton) {
  if (gameState.isLocked || !gameState.isActive) return;

  gameState.isLocked = true;
  clearQuestionTimer();
  gameState.answered += 1;

  const correctIndex = gameState.currentQuestion.respuestaCorrecta;
  const answerButtons = lockAnswerButtons();

  if (selectedIndex === correctIndex) {
    const pointsAwarded = calculateQuestionPoints();
    gameState.correctAnswers += 1;
    gameState.score += pointsAwarded;

    selectedButton.classList.add("correct");
    if (answerButtons[correctIndex]) answerButtons[correctIndex].classList.add("correct");

    showFeedback(`¡Correcto! +${pointsAwarded} puntos`, "good");
    playFeedbackTone(740, 0.09, "sine");
    window.setTimeout(spawnConfetti, 160);
  } else {
    gameState.wrongAnswers += 1;
    selectedButton.classList.add("incorrect");
    if (answerButtons[correctIndex]) answerButtons[correctIndex].classList.add("correct");

    showFeedback("Respuesta incorrecta", "bad");
    playFeedbackTone(210, 0.12, "square");

    if (navigator.vibrate) navigator.vibrate(80);
    document.body.classList.add("screen-shake");
    window.setTimeout(() => document.body.classList.remove("screen-shake"), 260);
  }

  updateScoreboard();
  scheduleNextQuestion();
}

function handleTimeout() {
  if (gameState.isLocked || !gameState.isActive) return;

  gameState.isLocked = true;
  gameState.wrongAnswers += 1;
  gameState.answered += 1;

  const answerButtons = lockAnswerButtons();
  const correctIndex = gameState.currentQuestion.respuestaCorrecta;

  if (answerButtons[correctIndex]) {
    answerButtons[correctIndex].classList.add("correct");
  }

  showFeedback("Tiempo agotado", "warn");
  playFeedbackTone(300, 0.12, "triangle");

  if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
  scheduleNextQuestion();
}

function getFinalClassification(score) {
  const maxPossibleScore = QUESTIONS_PER_GAME * 18;
  const scoreRatio = score / maxPossibleScore;

  if (scoreRatio >= 0.9) {
    return {
      title: "Maestro del Campus",
      message: "Dominaste el reto con un desempeño sobresaliente. Tu nivel académico y técnico refleja excelencia universitaria."
    };
  }

  if (scoreRatio >= 0.75) {
    return {
      title: "Genio Digital",
      message: "Tu rendimiento fue muy sólido. Mostraste rapidez, precisión y una base técnica notable."
    };
  }

  if (scoreRatio >= 0.55) {
    return {
      title: "Estudiante Destacado",
      message: "Lograste un desempeño muy bueno. Con un poco más de práctica alcanzarás una clasificación superior."
    };
  }

  return {
    title: "Aprendiz Tecnológico",
    message: "Cada partida fortalece tu conocimiento. Sigue practicando y tu rendimiento crecerá con rapidez."
  };
}

function finishGame() {
  clearQuestionTimer();
  gameState.isActive = false;
  gameState.isLocked = true;

  const finalLevel = Math.floor(gameState.answered / 5) + 1;
  const classification = getFinalClassification(gameState.score);

  dom.finalScore.textContent = String(gameState.score);
  dom.finalLevel.textContent = String(finalLevel);
  dom.finalHits.textContent = String(gameState.correctAnswers);
  dom.finalMisses.textContent = String(gameState.wrongAnswers);
  dom.rankTitle.textContent = classification.title;
  dom.rankMessage.textContent = classification.message;

  switchScreen(dom.endScreen);
  spawnConfetti();
}

function toggleSound() {
  gameState.soundEnabled = !gameState.soundEnabled;
  updateSoundButton();
}

function restartGame() {
  clearQuestionTimer();
  gameState.isActive = false;
  gameState.isLocked = false;
  dom.confettiLayer.innerHTML = "";
  dom.optionsGrid.innerHTML = "";
  dom.feedbackText.textContent = "";
  dom.feedbackText.className = "feedback-text";
  dom.questionText.textContent = "Pulsa iniciar para comenzar.";
  dom.progressFill.style.width = "0%";
  dom.progressText.textContent = "0%";
  dom.timerRing.style.setProperty("--p", "100");
  dom.timeValue.textContent = String(getDifficultyConfig().seconds);
  switchScreen(dom.startScreen);
}

function runLoadingSequence() {
  let progress = 0;

  const loadingInterval = window.setInterval(() => {
    progress += 4;
    dom.loadingFill.style.width = `${progress}%`;
    dom.loadingText.textContent = `Cargando ${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(loadingInterval);
      window.setTimeout(() => {
        dom.loadingScreen.classList.add("hidden");
      }, 220);
    }
  }, LOADING_STEP_DELAY);
}

function initializeApp() {
  dom.startButton.addEventListener("click", startGame);
  dom.restartButton.addEventListener("click", restartGame);
  dom.soundToggleBtn.addEventListener("click", toggleSound);

  dom.difficultySelect.addEventListener("change", () => {
    if (!gameState.isActive) {
      dom.timeValue.textContent = String(getDifficultyConfig().seconds);
      dom.difficultyLabel.textContent = getDifficultyConfig().label;
    }
  });

  dom.playerLabel.textContent = "Invitado";
  dom.difficultyLabel.textContent = DIFFICULTY_SETTINGS.medio.label;
  dom.remainingValue.textContent = String(QUESTIONS_PER_GAME);
  dom.timeValue.textContent = String(DIFFICULTY_SETTINGS.medio.seconds);
  dom.progressText.textContent = "0%";
  dom.progressFill.style.width = "0%";
  updateSoundButton();
  switchScreen(dom.startScreen);

  window.addEventListener("load", runLoadingSequence);
}

initializeApp();