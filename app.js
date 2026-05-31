// ==========================================
// 1. BASE DE DATOS
// ==========================================
const perfumesDB = {
    nicho: [
        {
            nombre: "Aventus",
            marca: "Creed",
            notas: "Piña, Abedul, Almizcle",
            precio: "$350",
            img: "https://bluemercury.com/cdn/shop/files/variant_images-size-338floz-3508441001114-3_953c4b8c-893c-41ec-b58f-8bb870da41a5.jpg?v=1775753493&width=1500"
        },
        {
            nombre: "Baccarat Rouge 540",
            marca: "Maison Francis Kurkdjian",
            notas: "Azafrán, Jazmín, Ámbar",
            precio: "$325",
            img: "https://abanuc.com/cdn/shop/files/3700559609170_5_2048x.jpg?v=1768827429"
        },
        {
            nombre: "Althaïr",
            marca: "Parfums de Marly",
            notas: "Canela, Vainilla Bourbon, Praliné",
            precio: "$315",
            img: "https://cdn.riah.ae/storage/upload/images/2023/10/02/651a5d8f9dfb0.jpg"
        },
        {
            nombre: "Erba Pura",
            marca: "Xerjoff",
            notas: "Naranja, Frutas, Almizcle",
            precio: "$362",
            img: "https://www.sohrelia.com/cdn/shop/files/ErbaPura_1fd60bf2-c94c-42e8-8f23-29c67eb4c5e2.png?v=1769036596&width=1445"
        },
        {
            nombre: "Bianco Latte",
            marca: "Giardini di Toscana",
            notas: "Caramelo, Miel, Vainilla",
            precio: "$147",
            img: "https://fragrancepassion.uk/cdn/shop/files/Marques-Site-2048x2048pxsiteFP_18_0543efce-65fb-4796-b94d-2123b0129878.png?v=1769001935&width=1445"
        }
    ],
    disenador: [
        {
            nombre: "Sauvage Elixir",
            marca: "Dior",
            notas: "Especias, Lavanda, Maderas",
            precio: "$165",
            img: "https://http2.mlstatic.com/D_NQ_NP_778057-MLA92796962309_092025-O.webp"
        },
        {
            nombre: "Le Beau Le Parfum Intense",
            marca: "Jean Paul Gaultier",
            notas: "Piña, Coco, Haba Tonka",
            precio: "$165",
            img: "https://www.faces.eg/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dw7530a4bc/images/017216524845_5.jpg?sw=800&sh=800"
        },
        {
            nombre: "Valentino Uomo Born In Roma Intense",
            marca: "Valentino",
            notas: "Vainilla, Lavanda, Vetiver",
            precio: "$165",
            img: "https://http2.mlstatic.com/D_NQ_NP_824831-MLA90593555843_082025-O.webp"
        },
        {
            nombre: "Angels' Share",
            marca: "By Kilian",
            notas: "Coñac, Canela, Vainilla, Praliné",
            precio: "$290",
            img: "https://santiagoperfumes.cl/wp-content/uploads/2022/09/4D893306-FA6E-488A-8CB8-E51FD9876C2B.jpeg.webp"
        }
    ],
    arabes: [
        {
            nombre: "Khamrah",
            marca: "Lattafa",
            notas: "Cognac, Vainilla, Praliné",
            precio: "$60",
            img: "https://labelleperfumes.com/cdn/shop/files/LATTAFA-KHAMRAH-AD_800x.webp?v=1693602573"
        },
        {
            nombre: "Mandarin Sky",
            marca: "ARMAF",
            notas: "Mandarina, Caramelo, Cedro",
            precio: "$65",
            img: "https://http2.mlstatic.com/D_NQ_NP_909941-MEC109097910640_042026-O.webp"
        },
        {
            nombre: "Liquid Brun",
            marca: "French Avenue",
            notas: "Canela, Vainilla Bourbon, Praliné",
            precio: "$85",
            img: "https://dsbooks.com.au/cdn/shop/files/25372_Image1.jpg?v=1730962488&width=640"
        },
        {
            nombre: "Hawas Ice",
            marca: "Rasasi",
            notas: "Manzana, Ciruela, Almizcle",
            precio: "$70",
            img: "https://momperfume.in/cdn/shop/files/rn-image_picker_lib_temp_72480dec-1714-4492-89a5-027d5c2ca5b3.jpg?v=1754413753&width=1445"
        }
    ]
};

const titulos = {
    nicho: "Colección Nicho",
    disenador: "Casas de Diseñador",
    arabes: "Esencias Árabes"
};

// ==========================================
// 2. LÓGICA DEL MODAL Y CARRITO
// ==========================================
const modal = document.getElementById('perfume-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');

function openModal(categoria) {
    modalTitle.innerText = titulos[categoria];
    modalGrid.innerHTML = '';

    perfumesDB[categoria].forEach(perfume => {
        const card = `
            <div class="bg-brand-dark rounded border border-white/5 overflow-hidden group hover:border-brand-gold/50 transition-colors">
                <div class="h-48 overflow-hidden relative">
                    <img src="${perfume.img}" 
                    alt="${perfume.nombre}" 
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                </div>
                <div class="p-4">
                    <p class="text-brand-gold text-[10px] uppercase tracking-widest mb-1">
                        ${perfume.marca}
                    </p>
                    <h3 class="font-serif text-lg text-white mb-2 leading-tight">
                        ${perfume.nombre}
                    </h3>
                    <p class="text-gray-400 text-xs font-light mb-4">
                        ${perfume.notas}
                    </p>
                    <div class="flex justify-between items-center border-t border-white/5 pt-3">
                        <span class="text-white font-serif">
                            ${perfume.precio}
                        </span>
                        <button onclick="addToCart(this)"
                        class="text-xs bg-white/10 hover:bg-brand-gold hover:text-black px-3 py-1.5 rounded transition-colors uppercase tracking-wider">
                            Lo quiero
                        </button>
                    </div>
                </div>
            </div>
        `;
        modalGrid.innerHTML += card;
    });

    modal.classList.remove('hidden');
    modal.classList.add('modal-enter');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('modal-enter');
    document.body.style.overflow = 'auto';
}

function addToCart(btn) {
    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Listo';
    btn.classList.add('bg-brand-gold', 'text-black');
    btn.classList.remove('bg-white/10');

    setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('bg-brand-gold', 'text-black');
        btn.classList.add('bg-white/10');
    }, 2000);
}

// Cerrar modal al hacer clic afuera
if(modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// ==========================================
// 3. CHATBOT FLOTANTE
// ==========================================
function getPerfumeRecommendation(message) {
    const text = message.toLowerCase();

    if (text.includes('hola') || text.includes('buenas') || text.includes('hey')) {
        return '¡Hola! Cuéntame qué tipo de aroma buscas: dulce, fresco, nocturno, elegante, árabe, nicho o para regalo.';
    }
    if (text.includes('categorias') || text.includes('tipos')) {
        return `Contamos con las categorías de:
        \n- Nicho: la expresión pura del aroma, sin reglas ni masas.
        \n- Diseñador: elegancia clásica, distinción y éxito garantizado.
        \n- Árabe: la magia del oud, las especias y la tradición árabe.`;
    }
    if (text.includes('dulce') || text.includes('vainilla') || text.includes('caramelo') || text.includes('gourmand')) {
        return 'Para aromas dulces te recomiendo Bianco Latte, Khamrah o Angels’ Share. Son opciones cálidas, gourmand y muy llamativas.';
    }
    if (text.includes('fresco') || text.includes('cítrico') || text.includes('citrico') || text.includes('diario') || text.includes('calor')) {
        return 'Para algo fresco y de uso diario puedes revisar Hawas Ice o Mandarin Sky. Tienen salida frutal/cítrica y son más fáciles de usar en clima cálido.';
    }
    if (text.includes('nocturno') || text.includes('noche') || text.includes('elegante') || text.includes('formal') || text.includes('cita')) {
        return 'Para noche o eventos elegantes te recomiendo Sauvage Elixir, Valentino Uomo Born In Roma Intense o Baccarat Rouge 540.';
    }
    if (text.includes('árabe') || text.includes('arabe') || text.includes('arabes') || text.includes('lattafa') || text.includes('armaf')) {
        return 'En perfumes árabes tenemos Khamrah, Mandarin Sky, Liquid Brun y Hawas Ice. Suelen destacar por buena duración y precios más accesibles.';
    }
    if (text.includes('nicho') || text.includes('exclusivo') || text.includes('lujo')) {
        return 'En nicho te recomiendo Aventus, Baccarat Rouge 540, Althaïr, Erba Pura o Bianco Latte. Son fragancias más exclusivas y con personalidad.';
    }
    if (text.includes('precio') || text.includes('cuesta') || text.includes('costos') || text.includes('barato') || text.includes('económico') || text.includes('economico')) {
        return 'Los precios van desde opciones árabes de $60 a $85, diseñador desde $165, y nicho desde $147 hasta $362 según la fragancia.';
    }
    if (text.includes('regalo') || text.includes('cumpleaños') || text.includes('cumpleanos')) {
        return 'Para regalo seguro: si quiere algo dulce, Khamrah o Bianco Latte. Si quiere algo elegante, Valentino Intense. Si buscas lujo, Baccarat Rouge 540.';
    }
    if (text.includes('contacto') || text.includes('whatsapp') || text.includes('comprar') || text.includes('asesor')) {
        return 'Puedes dejar tus datos en el formulario de contacto o escribir por WhatsApp al número que aparece en la sección “Contáctanos”.';
    }
    if (text.includes('quienes son') || text.includes('de que trata') || text.includes('que hacen')) {
        return '¡Hola! Somos Aura Élite, una empresa de perfumería exclusiva.';
    }
    if (text.includes('cual es su historia') || text.includes('historia') || text.includes('trayectoria')) {
        return 'Aura Élite nació de una pasión inquebrantable por los aromas que evocan recuerdos. Lo que comenzó como un pequeño atelier en 2025, hoy es un santuario para los amantes de las fragancias exclusivas. Viajamos por el mundo seleccionando extractos puros y esencias unicas e inigualables.';
    }

    return 'Puedo ayudarte mejor si me dices: ¿lo quieres dulce, fresco, fuerte, elegante, para diario, para noche o para regalo?';
}

function addChatMessage(type, message) {
    const messages = document.getElementById('chatbot-messages');
    if (!messages) return;

    const wrapper = document.createElement('div');
    wrapper.className = `chat-message ${type}`;

    if (type === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'chat-avatar';
        avatar.innerHTML = '<i class="fa-solid fa-droplet"></i>';
        wrapper.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = message;

    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
}

function sendChatbotMessage(message) {
    const cleanMessage = message.trim();
    if (!cleanMessage) return;

    addChatMessage('user', cleanMessage);

    setTimeout(() => {
        const answer = getPerfumeRecommendation(cleanMessage);
        addChatMessage('bot', answer);
    }, 500);
}

function initChatbot() {
    const toggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const close = document.getElementById('chatbot-close');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const suggestions = document.querySelectorAll('.chatbot-suggestions button');

    if (!toggle || !chatWindow || !close || !form || !input) return;

    toggle.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            input.focus();
        }
    });

    close.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendChatbotMessage(input.value);
        input.value = '';
    });

    suggestions.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.dataset.question || button.innerText; // Fallback por si no tiene dataset
            sendChatbotMessage(question);
        });
    });
}

// ==========================================
// 4. INICIALIZACIÓN GLOBAL (DOM Content Loaded)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias Navbar y Menú
    const btnMenu = document.getElementById('mobile-menu-btn');
    const menuMovil = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (btnMenu && menuMovil) {
        // Menú móvil
        btnMenu.addEventListener('click', () => {
            menuMovil.classList.toggle('hidden');
        });

        // Cerrar menú al hacer clic en enlaces
        menuMovil.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuMovil.classList.add('hidden');
            });
        });
    }

    if (navbar) {
        // Efecto Scroll del Navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-brand-dark', 'shadow-xl');
                navbar.classList.remove('bg-brand-dark/95', 'backdrop-blur-sm');
            } else {
                navbar.classList.add('bg-brand-dark/95', 'backdrop-blur-sm');
                navbar.classList.remove('bg-brand-dark', 'shadow-xl');
            }
        });
    }

    // Referencias Formulario
    const form = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-msg');

    if (form && formMsg) {
        // Enviar Formulario de Contacto
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalHtml = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Procesando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalHtml;
                btn.disabled = false;
                form.reset();
                formMsg.classList.remove('hidden');

                setTimeout(() => {
                    formMsg.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }

    // Inicializar el Chatbot
    initChatbot();
});
