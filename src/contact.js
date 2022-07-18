//Draws the contact page
const drawContact = (() => {

    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";
    content.appendChild(contactContainer);

    const contactContent = document.createElement("div");
    contactContent.className = "contact-content";
    contactContainer.appendChild(contactContent);

    const contactTitle = document.createElement("div");
    contactTitle.className = "title";
    contactTitle.innerHTML = "Contact Us";
    contactContent.appendChild(contactTitle);

    const contactDescription = document.createElement("p");
    contactDescription.innerHTML = "Please use the form below if you would like to get in touch. You can also call us at 999-999-9999.";
    contactContent.appendChild(contactDescription);

    const contactForm = document.createElement("form");
    contactForm.className = "contact-form";
    contactContent.appendChild(contactForm);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name";
    contactForm.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.placeholder = "Your name...";
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email";
    contactForm.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Your email address...";
    contactForm.appendChild(emailInput);
    
    const messageLabel = document.createElement("message");
    messageLabel.setAttribute("for", "message");
    messageLabel.innerHTML = "Message";
    contactForm.appendChild(messageLabel);

    const messageInput = document.createElement("textarea");
    messageInput.id = "message";
    messageInput.name = "message";
    messageInput.placeholder = "Please write your message here...";
    messageInput.style = "height: 200px";
    contactForm.appendChild(messageInput);

    const submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "Submit";
    contactForm.appendChild(submitInput);
});

export {drawContact};