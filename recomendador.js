// =====================================
// PERFUMES DISPONIBLES
// =====================================

const perfumes = [

    {
        nombre: "Creed Aventus",

        imagen: "https://bluemercury.com/cdn/shop/files/variant_images-size-338floz-3508441001114-3_953c4b8c-893c-41ec-b58f-8bb870da41a5.jpg?v=1775753493&width=1500",

        descripcion:
            "Fragancia elegante y poderosa con notas frutales y amaderadas.",

        atributos: [
            "elegante",
            "masculino",
            "amaderado",
            "lujo",
            "formal",
            "fuerte",
            "seguro"
        ],

        puntos: 0
    },

    {
        nombre: "Baccarat Rouge 540",

        imagen: "https://abanuc.com/cdn/shop/files/3700559609170_5_2048x.jpg?v=1768827429",

        descripcion:
            "Perfume sofisticado, dulce y lujoso con una presencia única.",

        atributos: [
            "dulce",
            "lujo",
            "elegante",
            "seductor",
            "intenso",
            "formal"
        ],

        puntos: 0
    },

    {
        nombre: "Althaïr",

        imagen: "https://cdn.riah.ae/storage/upload/images/2023/10/02/651a5d8f9dfb0.jpg",

        descripcion:
            "Fragancia cálida y cremosa con vainilla y especias.",

        atributos: [
            "vainilla",
            "dulce",
            "calido",
            "elegante",
            "noche",
            "seductor"
        ],

        puntos: 0
    },

    {
        nombre: "Erba Pura",

        imagen: "https://www.sohrelia.com/cdn/shop/files/ErbaPura_1fd60bf2-c94c-42e8-8f23-29c67eb4c5e2.png?v=1769036596&width=1445",

        descripcion:
            "Perfume fresco, frutal y vibrante ideal para personas extrovertidas.",

        atributos: [
            "frutal",
            "fresco",
            "verano",
            "extrovertido",
            "juvenil"
        ],

        puntos: 0
    },

    {
        nombre: "Bianco Latte",

        imagen: "https://fragrancepassion.uk/cdn/shop/files/Marques-Site-2048x2048pxsiteFP_18_0543efce-65fb-4796-b94d-2123b0129878.png?v=1769001935&width=1445",

        descripcion:
            "Fragancia extremadamente dulce y gourmand con vainilla y caramelo.",

        atributos: [
            "dulce",
            "vainilla",
            "caramelo",
            "gourmand",
            "calido"
        ],

        puntos: 0
    },

    {
        nombre: "Sauvage Elixir",

        imagen: "https://http2.mlstatic.com/D_NQ_NP_778057-MLA92796962309_092025-O.webp",

        descripcion:
            "Perfume intenso y especiado para personas dominantes.",

        atributos: [
            "fuerte",
            "masculino",
            "especiado",
            "noche",
            "dominante",
            "formal"
        ],

        puntos: 0
    },

    {
        nombre: "Le Beau Le Parfum",

        imagen: "https://www.faces.eg/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dw7530a4bc/images/017216524845_5.jpg?sw=800&sh=800",

        descripcion:
            "Fragancia tropical, dulce y seductora con coco y piña.",

        atributos: [
            "tropical",
            "dulce",
            "seductor",
            "verano",
            "juvenil"
        ],

        puntos: 0
    },

    {
        nombre: "Valentino Uomo Born In Roma Intense",

        imagen: "https://http2.mlstatic.com/D_NQ_NP_824831-MLA90593555843_082025-O.webp",

        descripcion:
            "Perfume elegante con vainilla y lavanda para ocasiones especiales.",

        atributos: [
            "vainilla",
            "elegante",
            "noche",
            "formal",
            "seductor"
        ],

        puntos: 0
    },

    {
        nombre: "Angels' Share",

        imagen: "https://santiagoperfumes.cl/wp-content/uploads/2022/09/4D893306-FA6E-488A-8CB8-E51FD9876C2B.jpeg.webp",

        descripcion:
            "Fragancia cálida y lujosa con notas de coñac, canela y vainilla.",

        atributos: [
            "calido",
            "vainilla",
            "lujo",
            "noche",
            "elegante",
            "gourmand"
        ],

        puntos: 0
    },

    {
        nombre: "Khamrah",

        imagen: "https://labelleperfumes.com/cdn/shop/files/LATTAFA-KHAMRAH-AD_800x.webp?v=1693602573",

        descripcion:
            "Perfume dulce y especiado con un estilo árabe intenso.",

        atributos: [
            "dulce",
            "especiado",
            "vainilla",
            "noche",
            "intenso"
        ],

        puntos: 0
    },

    {
        nombre: "Mandarin Sky",

        imagen: "https://http2.mlstatic.com/D_NQ_NP_909941-MEC109097910640_042026-O.webp",

        descripcion:
            "Fragancia fresca y dulce con mandarina y caramelo.",

        atributos: [
            "citricos",
            "dulce",
            "juvenil",
            "fresco",
            "diario"
        ],

        puntos: 0
    },

    {
        nombre: "Liquid Brun",

        imagen: "https://dsbooks.com.au/cdn/shop/files/25372_Image1.jpg?v=1730962488&width=640",

        descripcion:
            "Perfume cálido y gourmand con vainilla bourbon y praliné.",

        atributos: [
            "vainilla",
            "dulce",
            "gourmand",
            "calido",
            "noche"
        ],

        puntos: 0
    },

    {
        nombre: "Hawas Ice",

        imagen: "https://momperfume.in/cdn/shop/files/rn-image_picker_lib_temp_72480dec-1714-4492-89a5-027d5c2ca5b3.jpg?v=1754413753&width=1445",

        descripcion:
            "Fragancia fresca, limpia y moderna con frutas y almizcle.",

        atributos: [
            "fresco",
            "frutal",
            "verano",
            "diario",
            "juvenil"
        ],

        puntos: 0
    }

];

// =====================================
// PREGUNTAS
// =====================================

const preguntas = [

    {
        pregunta:
            "¿Qué tipo de aroma prefieres?",

        opciones: [

            {
                texto: "Dulce y cálido",
                atributos: ["dulce", "vainilla", "gourmand"]
            },

            {
                texto: "Fresco y limpio",
                atributos: ["fresco", "diario"]
            },

            {
                texto: "Frutal y juvenil",
                atributos: ["frutal", "juvenil"]
            },

            {
                texto: "Elegante y amaderado",
                atributos: ["elegante", "amaderado"]
            }

        ]
    },

    {
        pregunta:
            "¿Para qué ocasión usarías más el perfume?",

        opciones: [

            {
                texto: "Eventos elegantes",
                atributos: ["formal", "lujo"]
            },

            {
                texto: "Fiestas o salidas",
                atributos: ["seductor", "noche"]
            },

            {
                texto: "Uso diario",
                atributos: ["diario", "fresco"]
            },

            {
                texto: "Climas fríos",
                atributos: ["calido", "intenso"]
            }

        ]
    },

    {
        pregunta:
            "¿Qué personalidad te representa más?",

        opciones: [

            {
                texto: "Seguro y dominante",
                atributos: ["dominante", "fuerte"]
            },

            {
                texto: "Elegante y sofisticado",
                atributos: ["elegante", "lujo"]
            },

            {
                texto: "Relajado y juvenil",
                atributos: ["juvenil", "fresco"]
            },

            {
                texto: "Seductor y misterioso",
                atributos: ["seductor", "noche"]
            }

        ]
    },

    {
        pregunta:
            "¿Qué intensidad prefieres?",

        opciones: [

            {
                texto: "Suave",
                atributos: ["fresco", "diario"]
            },

            {
                texto: "Moderada",
                atributos: ["juvenil", "frutal"]
            },

            {
                texto: "Fuerte e intensa",
                atributos: ["fuerte", "intenso"]
            }

        ]
    },

    {
        pregunta:
            "¿Qué clima combina más contigo?",

        opciones: [

            {
                texto: "Clima cálido",
                atributos: ["verano", "fresco"]
            },

            {
                texto: "Clima frío",
                atributos: ["calido", "vainilla"]
            },

            {
                texto: "Cualquier clima",
                atributos: ["elegante", "formal"]
            }

        ]
    },

    {
        pregunta:
            "¿Qué sensación quieres transmitir?",

        opciones: [

            {
                texto: "Lujo y elegancia",
                atributos: ["lujo", "elegante"]
            },

            {
                texto: "Atracción y seducción",
                atributos: ["seductor", "noche"]
            },

            {
                texto: "Frescura y energía",
                atributos: ["fresco", "juvenil"]
            },

            {
                texto: "Presencia fuerte",
                atributos: ["dominante", "intenso"]
            }

        ]
    }

];

// =====================================
// VARIABLES
// =====================================

let preguntaActual = 0;

// =====================================
// ELEMENTOS HTML
// =====================================

const btnIniciar =
    document.getElementById("btnIniciar");

const intro =
    document.querySelector(".intro");

const contenedorTest =
    document.getElementById("contenedorTest");

const preguntaElemento =
    document.getElementById("pregunta");

const opcionesElemento =
    document.getElementById("opciones");

const resultado =
    document.getElementById("resultado");

const barraProgreso =
    document.getElementById("barraProgreso");

const textoProgreso =
    document.getElementById("textoProgreso");

const nombrePerfume =
    document.getElementById("nombrePerfume");

const descripcionPerfume =
    document.getElementById("descripcionPerfume");

const imagenPerfume =
    document.getElementById("imagenPerfume");

const btnReiniciar =
    document.getElementById("btnReiniciar");

// =====================================
// INICIAR TEST
// =====================================

btnIniciar.addEventListener("click", () => {

    intro.classList.add("oculto");

    contenedorTest.classList.remove("oculto");

    mostrarPregunta();

});

// =====================================
// MOSTRAR PREGUNTA
// =====================================

function mostrarPregunta() {

    opcionesElemento.innerHTML = "";

    const pregunta = preguntas[preguntaActual];

    preguntaElemento.textContent =
        pregunta.pregunta;

    actualizarBarra();

    pregunta.opciones.forEach(opcion => {

        const boton =
            document.createElement("button");

        boton.textContent = opcion.texto;

        boton.classList.add("opcion");

        boton.addEventListener("click", () => {

            procesarRespuesta(opcion.atributos);

            siguientePregunta();

        });

        opcionesElemento.appendChild(boton);

    });

}

// =====================================
// PROCESAR RESPUESTAS
// =====================================

function procesarRespuesta(atributosElegidos) {

    perfumes.forEach(perfume => {

        atributosElegidos.forEach(atributo => {

            if (perfume.atributos.includes(atributo)) {

                perfume.puntos += 2;

            }

        });

    });

}

// =====================================
// SIGUIENTE PREGUNTA
// =====================================

function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual < preguntas.length) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

}

// =====================================
// BARRA DE PROGRESO
// =====================================

function actualizarBarra() {

    const porcentaje =
        ((preguntaActual + 1) / preguntas.length) * 100;

    barraProgreso.style.width =
        porcentaje + "%";

    textoProgreso.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

}

// =====================================
// RESULTADO FINAL
// =====================================

function mostrarResultado() {

    contenedorTest.classList.add("oculto");

    resultado.classList.remove("oculto");

    // ORDENAR PERFUMES
    const perfumesOrdenados =
        perfumes.sort((a, b) => b.puntos - a.puntos);

    const ganador =
        perfumesOrdenados[0];

    const alternativo =
        perfumesOrdenados[1];

    // PERFUME PRINCIPAL
    nombrePerfume.textContent =
        ganador.nombre;

    descripcionPerfume.textContent =
        ganador.descripcion;

    imagenPerfume.src =
        ganador.imagen;

    // SEGUNDA OPCION
    document.getElementById("nombreAlternativo")
        .textContent = alternativo.nombre;

    document.getElementById("descripcionAlternativa")
        .textContent = alternativo.descripcion;

    document.getElementById("imagenAlternativa") 
        .src = alternativo.imagen; 

}

// =====================================
// REINICIAR TEST
// =====================================

btnReiniciar.addEventListener("click", () => {

    preguntaActual = 0;

    perfumes.forEach(perfume => {

        perfume.puntos = 0;

    });

    resultado.classList.add("oculto");

    intro.classList.remove("oculto");

});
