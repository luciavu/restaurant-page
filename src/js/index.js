import "../css/styles.css";
import "../css/fontello.css";
import { renderHome } from "./home.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    // Create navigation menu and attach event listeners
    const navOptions = ["home", "menu", "contact"];

    const renderFunctions = {
        home: renderHome,
        contact: renderContact,
        menu: renderMenu,
    };

    const nav = document.getElementById("nav");
    const content = document.querySelector(".content");

    navOptions.forEach((option) => {
        // Create button
        const button = document.createElement("button");
        button.id = option;
        button.textContent = `${option[0].toUpperCase() + option.slice(1)}`;

        button.addEventListener("click", () => {
            // Pass over active button state
            const buttons = document.querySelectorAll("#nav button");
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            // Clear and render content
            content.innerHTML = "";
            renderFunctions[option]();
        });
        nav.appendChild(button);
    });

    // Render home on page load
    renderHome();
});
