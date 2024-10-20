export function renderMenu() {
    const content = document.querySelector(".content");

    const burgers = {
        Cheeseburger: 3.5,
        "Bacon Burger": 4.0,
        "Veggie Burger": 3.75,
        "Double Burger": 5.0,
        "Mushroom Burger": 4.5,
        "BBQ Burger": 4.25,
    };

    const snacks = {
        "French Fries": 2.5,
        "Onion Rings": 3.0,
        "Mozzarella Sticks": 4.0,
        "Chicken Wings": 5.5,
        Nachos: 3.75,
        "Soft Pretzel": 2.25,
    };

    const drinks = {
        Coke: 2.0,
        "Diet Coke": 2.0,
        Sprite: 2.0,
        Fanta: 2.0,
        "Grimace Shake": 3.0,
        Water: 1.0,
    };

    // Helper function
    const createMenuSection = (title, items) => {
        const sectionContainer = document.createElement("div");
        const heading = document.createElement("h2");
        heading.textContent = title;

        sectionContainer.append(heading);

        for (const [name, price] of Object.entries(items)) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("itemDiv");
            const nameDiv = document.createElement("div");
            const priceDiv = document.createElement("div");
            nameDiv.textContent = `${name}`;
            priceDiv.textContent = `${price.toFixed(2)}`;
            itemDiv.append(nameDiv);
            itemDiv.append(priceDiv);
            sectionContainer.append(itemDiv);
        }

        return sectionContainer;
    };

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuContainer.append(menuTitle);

    menu.append(createMenuSection("Burgers", burgers));
    menu.append(createMenuSection("Snacks", snacks));
    menu.append(createMenuSection("Drinks", drinks));

    menuContainer.append(menu);
    content.append(menuContainer);
}
