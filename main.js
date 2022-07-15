import { drawIndex } from "../src/index.js";
import { drawMenu } from "../src/menu.js";

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

headerDraw();
drawIndex();



document.getElementById("menu").addEventListener("click", function (){
    content.children[1].remove();
    drawMenu();
});

document.getElementById("home").addEventListener("click", function (){
    content.children[1].remove();
    drawIndex();
});

// drawIndex(); Working!
// drawMenu(); Working!