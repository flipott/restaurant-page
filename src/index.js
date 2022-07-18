import { drawMenu } from "../src/menu.js";
import { drawContact } from "../src/contact.js";

//Draws header to be used across all pages
function headerDraw() {
    const content = document.getElementById("content");

    const header = document.createElement('div');
    header.className = "header";
    content.appendChild(header);

    const logo = document.createElement('div');
    logo.className = "logo";
    logo.innerHTML = "Matt's"
    header.appendChild(logo);

    const tabs = document.createElement('div');
    tabs.className = "tabs";
    header.appendChild(tabs);

    const homeTab = document.createElement('button');
    homeTab.className = "tab";
    homeTab.id = "home";
    homeTab.innerHTML = "Home";
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.className = "tab";
    menuTab.id = "menu";
    menuTab.innerHTML = "Menu";
    tabs.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.className = "tab";
    contactTab.id = "contact";
    contactTab.innerHTML = "Contact";
    tabs.appendChild(contactTab);
}

//Draws the index page
const drawIndex = (() => {

    const content = document.getElementById("content");

    const indexContainer = document.createElement('div');
    indexContainer.className = "index-container";
    content.appendChild(indexContainer);

    const heroImage = document.createElement('div');
    heroImage.className = "hero-image";
    indexContainer.appendChild(heroImage);

    const heroText = document.createElement('div');
    heroText.className = "hero-text";
    heroImage.appendChild(heroText);

    const heroTitle = document.createElement('div');
    heroTitle.className = "title";
    heroTitle.innerHTML = "Matt's Ice Cream Shack";
    heroText.appendChild(heroTitle);

    const heroDescription = document.createElement('p');
    heroDescription.innerHTML = "Serving you the most delicious desserts in Detroit, MI.";
    heroText.appendChild(heroDescription);

    const information = document.createElement('div');
    information.className = "information";
    indexContainer.appendChild(information);

    const hours = document.createElement("div");
    hours.className="hours";
    information.appendChild(hours);

    const hoursTitle = document.createElement("div");
    hoursTitle.innerHTML = "Hours";
    hours.appendChild(hoursTitle);

    const hoursInformation = document.createElement("div");
    hoursInformation.innerHTML =
    "Monday: 11 AM - 9 PM <br>Tuesday: 11 AM - 9 PM <br>Wednesday: 11 AM - 8 PM <br>Thursday: 11 AM - 9 PM <br>Friday: 11 AM - 11 PM <br>Saturday: 10 AM - 11 PM <br>Sunday: 11 AM - 7 PM<br>"
    hours.appendChild(hoursInformation);

    const locate = document.createElement("div");
    locate.className = "location";
    information.appendChild(locate);

    const locationTitle = document.createElement('div');
    locationTitle.innerHTML = "Location";
    locate.appendChild(locationTitle);

    const locationInformation = document.createElement('div');
    locationInformation.innerHTML = "999 Nonexistent Drive<br>Detroit, MI 48201";
    locate.appendChild(locationInformation);
});


//Draw header and home page upon initial load
headerDraw();
drawIndex();

//Draw menu page if menu tab is clicked
document.getElementById("menu").addEventListener("click", function (){
    content.children[1].remove();
    drawMenu();
});

//Draw home page if home tab is clicked
document.getElementById("home").addEventListener("click", function (){
    content.children[1].remove();
    drawIndex();
});

//Draw contact page if contact tab is cicked
document.getElementById("contact").addEventListener("click", function (){
    content.children[1].remove();
    drawContact();
});

export {drawIndex};