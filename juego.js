// --- BANCO DE PREGUNTAS AURA ÉLITE (10 por nivel) ---
const questionBank = {
    facil: [
        { question: "¿Qué es un perfume?", answers: ["Agua con colorante", "Una mezcla aromática de aceites y alcohol", "Solo flores exprimidas", "Un tipo de jabón líquido"], correct: 1 },
        { question: "¿Dónde es más recomendable aplicar el perfume?", answers: ["En la ropa", "En el cabello", "En los puntos de pulso (muñecas, cuello)", "En el aire y caminar hacia él"], correct: 2 },
        { question: "¿Qué familia olfativa incluye el aroma de las rosas y jazmines?", answers: ["Amaderada", "Cítrica", "Floral", "Oriental"], correct: 2 },
        { question: "¿Qué ingrediente aporta un aroma dulce y parecido al postre?", answers: ["El musgo", "La vainilla", "El limón", "La pimienta"], correct: 1 },
        { question: "¿Es recomendable frotar el perfume en las muñecas tras aplicarlo?", answers: ["Sí, para que caliente", "No, porque rompe las moléculas del aroma", "Solo si es de baja calidad", "Sí, para que dure más"], correct: 1 },
        { question: "¿Qué fruta pertenece a la familia olfativa cítrica?", answers: ["Manzana", "Fresa", "Bergamota", "Coco"], correct: 2 },
        { question: "¿Qué sentido utilizamos para percibir las fragancias?", answers: ["El gusto", "El tacto", "La vista", "El olfato"], correct: 3 },
        { question: "¿De dónde provienen los aceites esenciales tradicionales?", answers: ["Plantas, flores y resinas", "Del agua de mar", "Solo de las frutas", "Se inventan en laboratorios al azar"], correct: 0 },
        { question: "¿Cuál de estos es un perfume más ligero para el día a día?", answers: ["Extracto de Perfume", "Body Mist / Splash", "Eau de Parfum", "Aceite puro"], correct: 1 },
        { question: "¿Qué significa 'Eau de Parfum'?", answers: ["Agua de tocador", "Agua de colonia", "Agua de perfume", "Extracto puro"], correct: 2 }
    ],
    medio: [
        { question: "¿Qué es la perfumería 'Nicho'?", answers: ["Perfumes de supermercado", "Creaciones artísticas, exclusivas y de autor", "Perfumes solo para hombres", "Copias de marcas famosas"], correct: 1 },
        { question: "¿Qué es la 'Pirámide Olfativa'?", answers: ["Un envase en forma de triángulo", "Notas de salida, corazón y fondo", "Una técnica de ventas", "Una familia de perfumes egipcios"], correct: 1 },
        { question: "¿Cuál de estos formatos tiene la mayor concentración de esencia?", answers: ["Eau de Toilette", "Eau de Cologne", "Extracto de Perfume (Parfum)", "Eau Fraîche"], correct: 2 },
        { question: "¿Qué es el 'Sillage' (Estela)?", answers: ["El rastro que deja el perfume en el aire", "El envase de cristal", "El alcohol usado", "El color del líquido"], correct: 0 },
        { question: "¿Qué notas componen principalmente la familia 'Gourmand'?", answers: ["Maderas", "Cítricos", "Aromas comestibles (chocolate, caramelo)", "Rosas blancas"], correct: 2 },
        { question: "¿Qué ingrediente es conocido como el 'oro líquido' en la perfumería árabe?", answers: ["Almizcle", "Oud (Madera de Agar)", "Ámbar", "Azafrán"], correct: 1 },
        { question: "¿Qué hace un ingrediente 'fijador' en un perfume?", answers: ["Cambia el color", "Aumenta la estela", "Prolonga la duración del aroma en la piel", "Hace que huela más dulce"], correct: 2 },
        { question: "¿Qué caracteriza a la familia 'Fougère'?", answers: ["Huele a dulces y vainilla", "Evoca un bosque húmedo (lavanda, musgo)", "Solo tiene flores blancas", "Son notas marinas puras"], correct: 1 },
        { question: "¿Qué aporta el 'Almizcle' (Musk) a una fragancia?", answers: ["Un olor cítrico y ácido", "Una sensación limpia y de 'segunda piel'", "Huele a caramelo quemado", "Un aroma a tierra mojada"], correct: 1 },
        { question: "¿Qué notas se evaporan más rápido al aplicar un perfume?", answers: ["Notas de fondo", "Notas de corazón", "Notas de salida (top notes)", "Todas se evaporan igual"], correct: 2 }
    ],
    dificil: [
        { question: "¿Qué antigua técnica extrae aceites de flores delicadas usando grasa animal/vegetal?", answers: ["Destilación", "Enfleurage", "Maceración", "Prensado en frío"], correct: 1 },
        { question: "¿Qué es originalmente el 'Ámbar Gris'?", answers: ["La resina de un árbol milenario", "Una secreción del cachalote", "Una piedra preciosa derretida", "Un tipo de alga marina"], correct: 1 },
        { question: "¿Qué famosa molécula sintética huele a madera aterciopelada y limpia?", answers: ["Iso E Super", "Etil Maltol", "Linalool", "Aldehído C-12"], correct: 0 },
        { question: "¿Qué significa que un perfume sea un 'Flanker'?", answers: ["Que está descontinuado", "Que es una variación de un perfume original exitoso", "Que es 100% natural", "Que se vende sin caja"], correct: 1 },
        { question: "¿Quién es considerada la primera química perfumista de la historia?", answers: ["Cleopatra", "María Antonieta", "Tapputi (en Mesopotamia)", "Coco Chanel"], correct: 2 },
        { question: "¿Cuál es el compuesto principal que le da a la Bergamota su aroma característico?", answers: ["Acetato de Linalilo", "Eugenol", "Geraniol", "Cumarina"], correct: 0 },
        { question: "¿Qué es el 'Gálbano' en la perfumería?", answers: ["Un tipo de rosa", "Una resina de aroma verde, amargo y terroso", "Una madera dulce", "Un derivado del limón"], correct: 1 },
        { question: "¿A qué huele principalmente la molécula 'Ambroxan'?", answers: ["A rosas recién cortadas", "A chocolate oscuro", "Ámbar gris sintético, mineral y salado", "A humo de incienso"], correct: 2 },
        { question: "¿Qué describe el término 'Petricor'?", answers: ["El olor de las hojas secas", "El olor a tierra mojada después de la lluvia", "El proceso de filtrado del alcohol", "Una familia olfativa frutal"], correct: 1 },
        { question: "¿Cuál es considerada la capital mundial del perfume?", answers: ["París, Francia", "Milán, Italia", "Grasse, Francia", "Dubai, EAU"], correct: 2 }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById("startScreen");
    const gameScreen = document.getElementById("gameScreen");
    const resultScreen = document.getElementById("resultScreen");

    const questionText = document.getElementById("question");
    const answersDiv = document.getElementById("answers");

    const scoreText = document.getElementById("score");
    const timerText = document.getElementById("timer");
    const progressBar = document.getElementById("progressBar");
    const feedback = document.getElementById("feedback");

    const finalScore = document.getElementById("finalScore");
    const correctAnswers = document.getElementById("correctAnswers");
    const wrongAnswers = document.getElementById("wrongAnswers");
    const resultMessage = document.getElementById("resultMessage");
    const playerLabel = document.getElementById("playerLabel");

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    
    // El puntaje máximo por 10 preguntas será 20 (todo bien). Mínimo 10 (todo mal).
    let score = 0; 
    let hits = 0;
    let fails = 0;
    let timer = 15;
    let interval;

    document.getElementById("startBtn").addEventListener("click", startGame);
    document.getElementById("restartBtn").addEventListener("click", restartGame);

    function startGame() {
        const player = document.getElementById("playerName").value || "Invitado";
        const difficulty = document.getElementById("difficulty").value; // 'facil', 'medio', 'dificil'
        
        playerLabel.textContent = player;
        
        // Cargar las 10 preguntas según el nivel elegido
        currentQuestions = questionBank[difficulty];
        
        startScreen.classList.remove("active");
        gameScreen.classList.add("active");
        loadQuestion();
    }

    function loadQuestion() {
        clearInterval(interval);
        timer = 15;
        timerText.textContent = timer;

        interval = setInterval(() => {
            timer--;
            timerText.textContent = timer;
            if (timer <= 0) {
                // Si se acaba el tiempo, se cuenta como incorrecto (1 punto)
                score += 1;
                fails++;
                scoreText.textContent = score;
                feedback.textContent = "⏱️ Tiempo agotado";
                feedback.style.color = "#ff6b6b";
                setTimeout(nextQuestion, 1200);
            }
        }, 1000);

        const q = currentQuestions[currentQuestionIndex];
        questionText.textContent = q.question;
        answersDiv.innerHTML = "";

        q.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.classList.add("answer-btn");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answersDiv.appendChild(button);
        });

        updateProgress();
    }

    function checkAnswer(index) {
        clearInterval(interval);
        const q = currentQuestions[currentQuestionIndex];
        const buttons = document.querySelectorAll(".answer-btn");

        buttons.forEach(btn => btn.disabled = true);

        if (index === q.correct) {
            score += 2; // 2 Puntos si es correcto
            hits++;
            buttons[index].classList.add("correct");
            feedback.textContent = "✨ Excelente elección (+2 puntos)";
            feedback.style.color = "#d4af37";
        } else {
            score += 1; // 1 Punto si es incorrecto
            fails++;
            buttons[index].classList.add("wrong");
            buttons[q.correct].classList.add("correct");
            feedback.textContent = "❌ Esencia equivocada (+1 punto)";
            feedback.style.color = "#ff6b6b";
        }

        scoreText.textContent = score;

        setTimeout(() => {
            nextQuestion();
        }, 1500);
    }

    function nextQuestion() {
        feedback.textContent = "";
        currentQuestionIndex++;

        if (currentQuestionIndex >= currentQuestions.length) {
            finishGame();
        } else {
            loadQuestion();
        }
    }

    function finishGame() {
        gameScreen.classList.remove("active");
        resultScreen.classList.add("active");

        finalScore.textContent = score;
        correctAnswers.textContent = hits;
        wrongAnswers.textContent = fails;

        // Evaluación final (Máximo 20 pts, Mínimo 10 pts)
        if (score >= 18) {
            // 8 a 10 aciertos
            resultMessage.textContent = "🏆 ¡Impecable! Eres un experto olfativo. Tienes un conocimiento profundo de la alta perfumería.";
        } else if (score >= 14) {
            // 4 a 7 aciertos
            resultMessage.textContent = "✨ Tienes una excelente base y buen gusto, pero te falta experimentar un poco más para dominar los detalles sutiles.";
        } else {
            // 0 a 3 aciertos
            resultMessage.textContent = "🌱 Estás iniciando en este viaje aromático. Te invitamos a descubrir y experimentar más fragancias en Aura Élite.";
        }
    }

    function restartGame() {
        currentQuestionIndex = 0;
        score = 0;
        hits = 0;
        fails = 0;
        scoreText.textContent = 0;

        resultScreen.classList.remove("active");
        startScreen.classList.add("active");
    }

    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = progress + "%";
    }

    // --- ANIMACIÓN DE CARGA INICIAL ---
    let progress = 0;
    const fill = document.getElementById("loadingFill");
    const text = document.getElementById("loadingText");
    const screen = document.getElementById("loadingScreen");

    if (fill && text && screen) {
        const loadInterval = setInterval(() => {
            progress += 5;
            fill.style.width = progress + "%";
            text.textContent = progress + "%";

            if (progress >= 100) {
                clearInterval(loadInterval);
                setTimeout(() => {
                    screen.classList.add("hide");
                }, 400);
            }
        }, 50);
    }
});
