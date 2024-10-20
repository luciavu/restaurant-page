import "../css/styles.css";
import "../css/fontello.css";
import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";
import { renderMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.getElementById("nav");
    const content = document.querySelector(".content");

    // Add github link
    const anchor = document.createElement("a");
    anchor.href = "https://github.com/luciavu/restaurant-page";
    anchor.target = "_blank";
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("icon-github-circled");
    anchor.append(githubIcon);
    header.insertBefore(anchor, nav);

    // Create navigation menu and attach event listeners
    const navOptions = ["home", "menu", "about"];

    const renderFunctions = {
        home: renderHome,
        about: renderAbout,
        menu: renderMenu,
    };

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
        nav.append(button);
    });

    // Render home on page load
    renderHome();
});
