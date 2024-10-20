export function renderAbout() {
    const content = document.querySelector(".content");
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");

    // Text
    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");
    aboutText.innerHTML = `
    Welcome to our restaurant, where culinary passion meets a cozy atmosphere. 
    Our dedicated team is committed to serving delicious dishes made from the 
    freshest local ingredients, ensuring a delightful dining experience for 
    every guest.<br><br>
    Our inviting ambiance is perfect for gatherings, whether it's a casual meal 
    with friends or a special celebration. Join us for an unforgettable culinary 
    journey that highlights the best flavors of the season.
`;
    // Title
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About";

    // Append
    aboutContainer.append(aboutTitle);
    aboutContainer.append(aboutText);

    content.append(aboutContainer);
}
