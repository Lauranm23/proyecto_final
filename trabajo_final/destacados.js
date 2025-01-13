document.addEventListener("DOMContentLoaded", () => {
    const importantDays = {
        "2023-01-01": {
            title: "1 de enero",
            description: "Primer día del año.",
            img: "destacados/1enero.jpg"
        },
        "2023-01-05": {
            title: "5 de enero",
            description: "Cabalgata de Reyes.",
            img: "destacados/5enero.jpg"
        },
        "2023-02-10": {
            title: "10 de Febrero",
            description: "Sábado de Carnaval",
            img: "destacados/10febrero.jpg",
        },
        "2023-03-22": {
            title: "22 de Marzo",
            description: "Cumpleaños de mi madre",
            img: "destacados/22marzo.jpg",
        },
        "2023-03-23": {
            title: "23 de Marzo",
            description: "Mi cumpleaños",
            img: "destacados/23marzo.jpg",
        },
        "2023-04-05": {
            title: "5 de Abril",
            description: "Foto de la orla",
            img: "destacados/5abril.jpg",
        },
        "2023-04-14": {
            title: "14 de Abril",
            description: "Feria de Sevilla",
            img: "destacados/14abril.jpg",
        },
        "2023-04-15": {
            title: "15 de Abril",
            description: "Cumple de Xexe",
            img: "destacados/15abril.jpg",
        },
        "2023-04-20": {
            title: "20 de Abril",
            description: "Concierto de Andy y Lucas",
            img: "destacados/20abril.jpg",
        },
        "2023-05-03": {
            title: "3 de Mayo",
            description: "Viaje a Granada",
            img: "destacados/3mayo.jpg",
        },
        "2023-05-10": {
            title: "10 de Mayo",
            description: "Feria de Jerez",
            img: "destacados/10mayo.jpg",
        },
        "2023-06-01": {
            title: "1 de Junio",
            description: "Cumple de Goal",
            img: "destacados/1junio.jpg",
        },
        "2023-06-06": {
            title: "6 de Junio",
            description: "Día en Calita de Roche",
            img: "destacados/6junio.jpg",
        },
        "2023-06-14": {
            title: "14 de Junio",
            description: "Escapada a Conil",
            img: "destacados/14junio.jpg",
        },
        "2023-06-21": {
            title: "21 de Junio",
            description: "Graduación",
            img: "destacados/21junio.jpg",
        },
        "2023-07-14": {
            title: "14 de Julio",
            description: "España gana la Eurocopa",
            img: "destacados/14julio.jpg",
        },
        "2023-07-18": {
            title: "18 de Julio",
            description: "Comida del Cádiz",
            img: "destacados/18julio.jpg",
        },
        "2023-07-25": {
            title: "25 de Julio",
            description: "Cumple de Papá",
            img: "destacados/25julio.jpg",
        },
        "2023-08-10": {
            title: "10 de Agosto",
            description: "Concierto Andy y Lucas",
            img: "destacados/10agosto.jpg",
        },
        "2023-08-18": {
            title: "18 de Agosto",
            description: "Comida de árbitros",
            img: "destacados/18agosto.jpg",
        },
        "2023-08-31": {
            title: "31 de Agosto",
            description: "Último día de escuela",
            img: "destacados/31agosto.jpg",
        },
        "2023-09-18": {
            title: "18 de Septiembre",
            description: "Viaje a Menorca",
            img: "destacados/18septiembre.jpg",
        },
        "2023-10-19": {
            title: "19 de Octubre",
            description: "Mi santo",
            img: "destacados/19 octubre.jpg",
        },
        "2023-11-06": {
            title: "6 de Noviembre",
            description: "Cumple de Lupe",
            img: "destacados/6noviembre.jpg",
        },
        "2023-12-20": {
            title: "20 de Diciembre",
            description: "Viaje a la Alsacia",
            img: "destacados/20diciembre.jpg",
        },
        "2023-12-24": {
            title: "24 de Diciembre",
            description: "Tarde Buena",
            img: "destacados/24diciembre.jpg",
        },
        "2023-12-31": {
            title: "31 de Diciembre",
            description: "Tarde Vieja",
            img: "destacados/31diciembre.jpg",
        },
    };

    const calendarElement = document.getElementById("calendar");

    const generateCalendar = (year) => {
        for (let month = 0; month < 12; month++) {
            const monthContainer = document.createElement("div");
            monthContainer.className = "month";

            const monthTitle = document.createElement("div");
            monthTitle.innerText = new Date(year, month).toLocaleString("es-ES", { month: "long" }).toUpperCase();
            monthContainer.appendChild(monthTitle);

            const daysContainer = document.createElement("div");
            daysContainer.className = "days";

            const firstDay = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement("div");
                emptyDay.className = "day";
                daysContainer.appendChild(emptyDay);
            }

            for (let day = 1; day <= totalDays; day++) {
                const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const dayElement = document.createElement("div");
                dayElement.className = "day";
                dayElement.innerText = day;
                dayElement.dataset.date = date;

                if (importantDays[date]) {
                    dayElement.classList.add("important");
                }

                daysContainer.appendChild(dayElement);
            }

            monthContainer.appendChild(daysContainer);
            calendarElement.appendChild(monthContainer);
        }
    };

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("important")) {
            const date = e.target.dataset.date;
            const { title, description, img } = importantDays[date];

            modal.querySelector("h2").innerText = title;
            modal.querySelector("p").innerText = description;
            modal.querySelector("img").src = img;

            modal.classList.add("active");
            overlay.classList.add("active");
        }

        if (e.target.classList.contains("close-modal") || e.target === overlay) {
            modal.classList.remove("active");
            overlay.classList.remove("active");
        }
    });

    generateCalendar(2023);
});
