//Dit is een thema switcher voor de website

const button = document.querySelector(".light-on-button");

button.addEventListener("click", function() {
    const elements = document.querySelectorAll(".themed");

    for (let i = 0; i< elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("theme-light");
    }
});