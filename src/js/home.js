export function renderHome() {
    const content = document.querySelector(".content");
    const homeButton = document.getElementById("home");
    const container = document.createElement("div");
    container.id = "container";

    // Set button state to active
    homeButton.classList.add("active");

    // Restaurant logo
    const logo = document.createElement("div");
    logo.id = "logo";
    logo.innerHTML = "The Restaurant<sup> TM</sup>"; // Won't use innerHTML irl cases

    // Restaurant order now button -> lead to menu
    const orderButton = document.createElement("button");
    orderButton.id = "order";
    orderButton.textContent = "Order online";

    // Append all elements to content div
    content.appendChild(container);
    container.appendChild(logo);
    container.appendChild(orderButton);
}
