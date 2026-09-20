// ===============================
// LIVE CLOCK
// ===============================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.getElementById("currentTime").textContent = time;
}

updateClock();

setInterval(updateClock, 1000);


// ===============================
// MAP BUTTONS
// ===============================

const buttons = document.querySelectorAll(".map-controls button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// ===============================
// SIMULATED LIVE RAINFALL
// ===============================

const rainfallElement =
    document.querySelector(".stat-card h2");

setInterval(() => {

    const value =
        (40 + Math.random() * 5).toFixed(1);

    rainfallElement.innerHTML =
        `${value} <span>mm/hr</span>`;

}, 4000);