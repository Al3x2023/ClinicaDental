// chatbot.js - Chatbot inteligente para clínica dental LiaDent

class DentalChatbot {
    constructor() {
        this.responses = [
            // Saludos
            { keywords: ['hola', 'buen', 'hey', 'buenas'], response: '¡Hola! 😊 Soy el asistente de <strong>LiaDent</strong>. ¿En qué puedo ayudarte hoy? Puedes preguntarme por servicios, horarios o agendar una cita.' },
            { keywords: ['gracias', 'grac', 'thank'], response: '¡De nada! 😊 Estoy aquí para ayudarte. ¿Necesitas algo más?' },
            { keywords: ['adios', 'chao', 'hasta luego', 'nos vemos'], response: '¡Hasta pronto! 😊 Si necesitas ayuda, estoy aquí. ¡Que tengas una sonrisa perfecta!' },

            // Servicios
            { keywords: ['servicio', 'que haces', 'ofrecen'], response: 'En <strong>LiaDent</strong> ofrecemos:<br><br>🦷 <strong>Odontología General</strong><br>✨ <strong>Ortodoncia</strong> (brackets y alineadores)<br>🪥 <strong>Implantes Dentales</strong><br>💎 <strong>Blanqueamiento</strong><br>🪥 <strong>Prevención y limpiezas</strong><br><br>¿Te interesa alguno en especial?' },
            { keywords: ['ortodoncia', 'bracket', 'alineador', 'invisalign'], response: '¡Claro! Ofrecemos:<br><br>✔️ Brackets metálicos y estéticos<br>✔️ Alineadores transparentes (tipo Invisalign)<br>✔️ Evaluación gratuita<br><br>¿Quieres saber precios o agendar una valoración?' },
            { keywords: ['implante', 'implantes', 'diente perdido', 'reemplazo'], response: 'Los <strong>implantes dentales</strong> son la solución más segura y permanente para reemplazar dientes perdidos. Usamos tecnología de vanguardia y materiales de alta calidad. 💯<br><br>¿Te gustaría una cita para evaluación?' },
            { keywords: ['blanqueamiento', 'blanco', 'blanquear', 'sonrisa blanca'], response: '¡Sí! Hacemos <strong>blanqueamiento dental profesional</strong> en clínica o con kit para casa. Resultados visibles desde la primera sesión. 😁<br><br>¿Te interesa agendar una cita?' },
            { keywords: ['general', 'revision', 'chequeo', 'limpieza', 'empaste'], response: 'La <strong>odontología general</strong> incluye:<br><br>🪥 Limpieza profesional<br>🪥 Empastes<br>🪥 Extracciones<br>🪥 Tratamientos preventivos<br><br>Recomendamos una visita cada 6 meses. ¿Quieres agendar tu limpieza?' },

            // Horarios y ubicación
            { keywords: ['horario', 'abren', 'cierran', 'atención', 'cuando'], response: 'Estamos abiertos:<br><br>📅 Lunes a Viernes: 8:00 AM - 7:00 PM<br>📅 Sábados: 9:00 AM - 3:00 PM<br>❌ Domingos: Cerrado<br><br>¿Quieres agendar una cita?' },
            { keywords: ['ubicacion', 'direccion', 'llegar', 'mapa', 'donde'], response: 'Estamos ubicados en el centro de la ciudad, cerca del parque principal. Puedes ver nuestra ubicación exacta <a href="#location" class="scroll-link"><strong>aquí</strong></a> o en <a href="https://maps.app.goo.gl/tu-link" target="_blank"><strong>Google Maps</strong></a>.' },

            // Citas
            { keywords: ['cita', 'agendar', 'reservar', 'turno', 'consulta'], response: '¡Claro! Puedes agendar tu cita haciendo clic en <a href="#appointment" class="scroll-link"><strong>Agendar Cita</strong></a> o escribiéndonos por <a href="https://wa.me/521234567890" target="_blank"><strong>WhatsApp</strong></a>.<br><br>¿En qué puedo ayudarte?' },

            // Preguntas frecuentes
            { keywords: ['precio', 'cuanto cuesta', 'costo', 'tarifa'], response: 'Los precios varían según el tratamiento. Aquí te doy una guía estimada:<br><br>🦷 Limpieza: desde $XXX<br>🦷 Blanqueamiento: desde $XXX<br>🦷 Ortodoncia: desde $XXX<br>🦷 Implante: desde $XXX<br><br>¿Te interesa un presupuesto personalizado? Puedo ayudarte a agendar una valoración gratuita.' },
            { keywords: ['dolor', 'dolor de muela', 'urgencia', 'emergencia'], response: 'Lamentamos que tengas dolor 😣. Priorizamos emergencias. Por favor, <strong>llámanos al [tu número]</strong> o escríbenos por <a href="https://wa.me/521234567890" target="_blank"><strong>WhatsApp</strong></a> para atenderte lo antes posible.' },
            { keywords: ['niño', 'pediatria', 'infantil', 'niños'], response: '¡Claro! Atendemos desde los 3 años. Tenemos un espacio especial para niños y tratamientos adaptados con paciencia y cariño. 😊 ¿Quieres agendar una primera visita?' },

            // Default
            { keywords: [], response: 'No entendí tu pregunta. 😕<br><br>Puedes preguntarme por:<br>• Servicios<br>• Horarios<br>• Precios<br>• Agendar cita<br>• Ubicación<br><br>O escribe <strong>"menú"</strong> para ver opciones.' }
        ];
    }

    // Busca coincidencias en las palabras clave
    getResponse(message) {
        message = message.toLowerCase().trim();

        // Respuesta especial para "menú"
        if (message === 'menú' || message === 'menu') {
            return 'Puedes preguntarme sobre:<br><br>' +
                   '🔹 <strong>Servicios</strong> (ortodoncia, implantes, etc.)<br>' +
                   '🔹 <strong>Horarios</strong><br>' +
                   '🔹 <strong>Ubicación</strong><br>' +
                   '🔹 <strong>Precios</strong><br>' +
                   '🔹 <strong>Agendar cita</strong><br>' +
                   '🔹 <strong>Emergencias</strong><br><br>' +
                   '¡Estoy aquí para ayudarte! 😊';
        }

        // Buscar coincidencias
        for (let item of this.responses) {
            if (item.keywords.length === 0) continue;
            if (item.keywords.some(keyword => message.includes(keyword))) {
                return item.response;
            }
        }

        // Si no hay coincidencia, devuelve el default
        return this.responses[this.responses.length - 1].response;
    }
}

// Inicializar el chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const bot = new DentalChatbot();
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-msg');

    // Función para agregar mensajes
    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg ${isUser ? 'user' : 'bot'}`;
        msgDiv.innerHTML = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Enviar mensaje
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, true);
        const response = bot.getResponse(text);
        setTimeout(() => addMessage(response), 600); // Respuesta con leve retraso
        chatInput.value = '';
    }

    // Eventos
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Soporte para enlaces internos (scroll)
    chatBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('scroll-link')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            document.getElementById('chatbot-window').style.display = 'none';
        }
    });
});