// Show Modal
let cities = document.querySelectorAll("li a");
let modal = document.getElementById("modal");

function showModal(element) {
    for (let city of cities) {
        if (city === element) {
            modal.classList.add("modal");
            modal.classList.remove("hidden");
        }
    }
}
// Hidden Modal
function hiddenModal() {
    if (modal.classList[0] === "modal") {
        modal.classList.add("hidden");
        modal.classList.remove("modal");
    }
}

// Dismiss Cookies
let buttonCookie = document.querySelector('button[class="btn-cookie"]');
let cookies = document.querySelector('div[class="cookie"]');

buttonCookie.addEventListener("click", () => {
    if (cookies) {
        cookies.classList.add("hidden");
    }
});

// Change Temperature
let degrees = document.querySelectorAll('p[class="degree"]');
let celsius = Array.from(degrees).map(element => +element.textContent.slice(0, -1))

function changeTemperature(option) {
    // Validate option value
    if (option.value === "celsius") {
        // for loop degrees
        for (let index = 0; index < degrees.length; index++) {
            degrees[index].innerText = `${celsius[index].toFixed(0)}°C`;
        }
    } else if (option.value === "kelvin") {
        for (let index = 0; index < degrees.length; index++) {
            let kelvin = celsius[index] + 273.15;
            degrees[index].innerText = `${kelvin.toFixed(0)}K`;
        }
    } else {
        for (let index = 0; index < degrees.length; index++) {
            let fahrenheit = (celsius[index] * 9) / 5 + 32;
            degrees[index].innerText = `${fahrenheit.toFixed(0)}°F`;
        }
    }
}
