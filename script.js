// =========================================
// LIVE CLOCK
// =========================================

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    const clock = document.getElementById("currentTime");

    if (clock) {
        clock.textContent = time;
    }
}

updateClock();
setInterval(updateClock, 1000);


// =========================================
// MAP BUTTONS
// =========================================

const mapButtons = document.querySelectorAll(".map-controls button");

mapButtons.forEach((button) => {

    button.addEventListener("click", () => {

        mapButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// =========================================
// SIMULATED LIVE RAINFALL
// =========================================

const rainfallElement = document.querySelector(".stat-card h2");

if (rainfallElement) {

    setInterval(() => {

        const value = (40 + Math.random() * 5).toFixed(1);

        rainfallElement.innerHTML =
            `${value} <span>mm/hr</span>`;

    }, 4000);

}


// =========================================
// FAQ ACCORDION
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        faqItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


// =========================================
// LIVE EVENT TIMER
// =========================================

// Demo event started 41 minutes and 32 seconds ago.

const eventStart = new Date();

eventStart.setMinutes(eventStart.getMinutes() - 41);
eventStart.setSeconds(eventStart.getSeconds() - 32);


function updateEventDuration() {

    const durationElement =
        document.getElementById("eventDuration");

    if (!durationElement) return;


    const now = new Date();

    const elapsed = now - eventStart;

    const totalSeconds =
        Math.floor(elapsed / 1000);


    const hours =
        Math.floor(totalSeconds / 3600);


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    const formattedTime =

        String(hours).padStart(2, "0") +
        ":" +

        String(minutes).padStart(2, "0") +
        ":" +

        String(seconds).padStart(2, "0");


    durationElement.textContent =
        formattedTime;

}


updateEventDuration();

setInterval(updateEventDuration, 1000);