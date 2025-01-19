document.addEventListener("DOMContentLoaded", () => {
    // Objeto que contiene los días importantes del año con sus detalles (título, descripción e imagen)
    const importantDays = {
        "2024-01-01": {
            title: "1 de enero",
            description: "Primer día del año.",
            img: "destacados/1enero.jpg"
        },
        "2024-01-05": {
            title: "5 de enero",
            description: "Cabalgata de Reyes.",
            img: "destacados/5enero.jpg"
        },
        "2024-02-10": {
            title: "10 de Febrero",
            description: "Sábado de Carnaval",
            img: "destacados/10febrero.jpg",
        },
        "2024-03-22": {
            title: "22 de Marzo",
            description: "Cumpleaños de mi madre",
            img: "destacados/22marzo.jpg",
        },
        "2024-03-23": {
            title: "23 de Marzo",
            description: "Mi cumpleaños",
            img: "destacados/23marzo.jpg",
        },
        "2024-04-05": {
            title: "5 de Abril",
            description: "Foto de la orla",
            img: "destacados/5abril.jpg",
        },
        "2024-04-14": {
            title: "14 de Abril",
            description: "Feria de Sevilla",
            img: "destacados/14abril.jpg",
        },
        "2024-04-15": {
            title: "15 de Abril",
            description: "Cumple de Xexe",
            img: "destacados/15abril.jpg",
        },
        "2024-04-20": {
            title: "20 de Abril",
            description: "Concierto de Andy y Lucas",
            img: "destacados/20abril.jpg",
        },
        "2024-05-03": {
            title: "3 de Mayo",
            description: "Viaje a Granada",
            img: "destacados/3mayo.jpg",
        },
        "2024-05-10": {
            title: "10 de Mayo",
            description: "Feria de Jerez",
            img: "destacados/10mayo.jpg",
        },
        "2024-06-01": {
            title: "1 de Junio",
            description: "Cumple de Goal",
            img: "destacados/1junio.jpg",
        },
        "2024-06-06": {
            title: "6 de Junio",
            description: "Día en Calita de Roche",
            img: "destacados/6junio.jpg",
        },
        "2024-06-14": {
            title: "14 de Junio",
            description: "Escapada a Conil",
            img: "destacados/14junio.jpg",
        },
        "2024-06-21": {
            title: "21 de Junio",
            description: "Graduación",
            img: "destacados/21junio.jpg",
        },
        "2024-07-14": {
            title: "14 de Julio",
            description: "España gana la Eurocopa",
            img: "destacados/14julio.jpg",
        },
        "2023-07-18": {
            title: "18 de Julio",
            description: "Comida del Cádiz",
            img: "destacados/18julio.jpg",
        },
        "2024-07-25": {
            title: "25 de Julio",
            description: "Cumple de Papá",
            img: "destacados/25julio.jpg",
        },
        "2024-08-10": {
            title: "10 de Agosto",
            description: "Concierto Andy y Lucas",
            img: "destacados/10agosto.jpg",
        },
        "2024-08-18": {
            title: "18 de Agosto",
            description: "Comida de árbitros",
            img: "destacados/18agosto.jpg",
        },
        "2024-08-31": {
            title: "31 de Agosto",
            description: "Último día de escuela",
            img: "destacados/31agosto.jpg",
        },
        "2023-09-18": {
            title: "18 de Septiembre",
            description: "Viaje a Menorca",
            img: "destacados/18septiembre.jpg",
        },
        "2024-10-19": {
            title: "19 de Octubre",
            description: "Mi santo",
            img: "destacados/19 octubre.jpg",
        },
        "2024-11-06": {
            title: "6 de Noviembre",
            description: "Cumple de Lupe",
            img: "destacados/6noviembre.jpg",
        },
        "2024-12-20": {
            title: "20 de Diciembre",
            description: "Viaje a la Alsacia",
            img: "destacados/20diciembre.jpg",
        },
        "2024-12-24": {
            title: "24 de Diciembre",
            description: "Tarde Buena",
            img: "destacados/24diciembre.jpg",
        },
        "2024-12-31": {
            title: "31 de Diciembre",
            description: "Tarde Vieja",
            img: "destacados/31diciembre.jpg",
        },
    };

    // Selecciona el contenedor principal del calendario en el DOM
    const calendarElement = document.getElementById("calendar");

    // Función para generar el calendario de un año específico
    const generateCalendar = (year) => {
        for (let month = 0; month < 12; month++) {
            // Itera sobre los 12 meses
            // Crea el contenedor del mes
            const monthContainer = document.createElement("div");
            monthContainer.className = "month";
            // Añade el título del mes
            const monthTitle = document.createElement("div");
            monthTitle.innerText = new Date(year, month).toLocaleString("es-ES", { month: "long" }).toUpperCase();
            monthContainer.appendChild(monthTitle);
            // Contenedor para los días del mes
            const daysContainer = document.createElement("div");
            daysContainer.className = "days";
            // Determina el día de la semana del primer día del mes
            const firstDay = new Date(year, month, 1).getDay();
            // Calcula el número total de días en el mes
            const totalDays = new Date(year, month + 1, 0).getDate();
            
            // Añade celdas vacías al principio para alinear correctamente los días
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement("div");
                emptyDay.className = "day";// Clase para estilos
                daysContainer.appendChild(emptyDay);
            }

            // Genera los días del mes
            for (let day = 1; day <= totalDays; day++) {
                // Construye la fecha en formato YYYY-MM-DD
                const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                // Crea un elemento para el día
                const dayElement = document.createElement("div");
                dayElement.className = "day";// Clase base
                dayElement.innerText = day;// Texto del día (número)
                dayElement.dataset.date = date;// Añade la fecha como atributo de datos

                // Si el día es importante, añade una clase especial
                if (importantDays[date]) {
                    dayElement.classList.add("important");
                }

                // Añade el día al contenedor de días
                daysContainer.appendChild(dayElement);
            }

            // Añade el contenedor de días al contenedor del mes
            monthContainer.appendChild(daysContainer);
            // Añade el mes completo al calendario
            calendarElement.appendChild(monthContainer);
        }
    };

    // Selecciona los elementos del modal y el overlay
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    // Escucha los clics en el documento
    document.addEventListener("click", (e) => {
        // Si se hace clic en un día importante
        if (e.target.classList.contains("important")) {
            const date = e.target.dataset.date;// Obtiene la fecha del día
            const { title, description, img } = importantDays[date];// Recupera los detalles del día

            // Rellena los elementos del modal con los datos del día importante
            modal.querySelector("h2").innerText = title;
            modal.querySelector("p").innerText = description;
            modal.querySelector("img").src = img;

            // Muestra el modal y el overlay
            modal.classList.add("active");
            overlay.classList.add("active");
        }

        // Si se hace clic en el botón de cerrar modal o en el overlay
        if (e.target.classList.contains("close-modal") || e.target === overlay) {
            // Oculta el modal y el overlay
            modal.classList.remove("active");
            overlay.classList.remove("active");
        }
    });

    // Genera el calendario para el año 2023
    generateCalendar(2024);
});
