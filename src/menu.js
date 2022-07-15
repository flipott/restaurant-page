const drawMenu = (() => {
    
    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    content.appendChild(menuContainer);

    const menuContent = document.createElement("div");
    menuContent.className = "menu-content";
    menuContainer.appendChild(menuContent);

    const vesselTitle = document.createElement("div");
    vesselTitle.className = "title";
    vesselTitle.innerHTML = "Vessels";
    menuContent.appendChild(vesselTitle);

    const vesselDescription = document.createElement("p");
    vesselDescription.innerHTML = "All options come with up to two flavors of ice cream and one topping.";
    menuContent.appendChild(vesselDescription);

    const cups = document.createElement("div");
    cups.className = "cups";
    menuContent.appendChild(cups);

    const cupTitle = document.createElement("div");
    cupTitle.className = "menu-title";
    cupTitle.innerHTML = "Cups";
    cups.appendChild(cupTitle);

    const cupList = document.createElement("div");
    cupList.className = "vessel-list";
    cups.appendChild(cupList);

    let itemList = [
        {name: "Small", price: "$1.75"},
        {name: "Regular", price: "$2.25"},
        {name: "Large", price: "$3.25"},
        {name: "Cake", price: "$1.50"},
        {name: "Waffle", price: "$3.50"}
    ];

    for (let i=0;i<3;i++) {
        let item = document.createElement("div");
        item.className = "item";
        cupList.appendChild(item);

        let name = document.createElement("div");
        name.className = "name";
        name.innerHTML = itemList[i].name;
        item.appendChild(name);

        let price = document.createElement("div");
        price.className = "price";
        price.innerHTML = itemList[i].price;
        item.appendChild(price);
    }

    const cones = document.createElement("div");
    cones.className = "cones";
    menuContent.appendChild(cones);

    const coneTitle = document.createElement("div");
    coneTitle.className = "menu-title";
    coneTitle.innerHTML = "Cones";
    cones.appendChild(coneTitle);

    const coneList = document.createElement("div");
    coneList.className = "vessel-list";
    cones.appendChild(coneList);

    for (let i=3;i<5;i++) {
        let item = document.createElement("div");
        item.className = "item";
        coneList.appendChild(item);

        let name = document.createElement("div");
        name.className = "name";
        name.innerHTML = itemList[i].name;
        item.appendChild(name);

        let price = document.createElement("div");
        price.className = "price";
        price.innerHTML = itemList[i].price;
        item.appendChild(price);
    }

    const flavorsTitle = document.createElement("div");
    flavorsTitle.className = "title";
    flavorsTitle.innerHTML = "Flavors";
    menuContent.appendChild(flavorsTitle);

    const flavors = document.createElement("div");
    flavors.className = "flavors";
    menuContent.appendChild(flavors);


    let flavorChart = ["Vanilla", "Chocolate", "Strawberry", "Banana", "Cookie Dough", "Mint Chocolate Chip", "Cookies and Cream",
    "Coconut", "Coffee", "Pistachio", "Neopolitan", "Peanut Butter"];

    const firstFlavorList = document.createElement("ul");
    flavors.appendChild(firstFlavorList);

    for (let i=0; i<6; i++) {
        let flavor = document.createElement("li");
        flavor.innerHTML = flavorChart[i];
        firstFlavorList.appendChild(flavor);
    }

    const secondFlavorList = document.createElement("ul");
    flavors.appendChild(secondFlavorList);

    for (let i=6; i<12; i++) {
        let flavor = document.createElement("li");
        flavor.innerHTML = flavorChart[i];
        secondFlavorList.appendChild(flavor);
    }

    const toppingsTitle = document.createElement("div");
    toppingsTitle.className = "title";
    toppingsTitle.innerHTML = "Toppings";
    menuContent.appendChild(toppingsTitle);

    const toppings = document.createElement("div");
    toppings.className = "toppings";
    menuContent.appendChild(toppings);


    let toppingChart = ["Hot Fudge", "Sprinkles", "Pretzels", "Caramel", "Oreos", "Whipped Cream", "Marshmallows", "Nuts", "Cherries", "Gummy Bears"];

    const firstToppingList = document.createElement("ul");
    toppings.appendChild(firstToppingList);

    for (let i=0; i<5; i++) {
        let topping = document.createElement("li");
        topping.innerHTML = toppingChart[i];
        firstToppingList.appendChild(topping);
    }

    const secondToppingList = document.createElement("ul");
    toppings.appendChild(secondToppingList);

    for (let i=5; i<toppingChart.length; i++) {
        let topping = document.createElement("li");
        topping.innerHTML = toppingChart[i];
        secondToppingList.appendChild(topping);
    }
});

export {drawMenu};