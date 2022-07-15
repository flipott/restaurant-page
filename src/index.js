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

export {drawIndex};