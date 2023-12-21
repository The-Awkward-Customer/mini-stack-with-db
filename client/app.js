const myForm = document.getElementById("myFormElement");

myForm.addEventListener("submit", (event) => {
  // prevent default form behaviour
  event.preventDefault();

  // create a new formData object from myForm
  const formData = new FormData(myForm);
  // converts my formData object into a regular JS object
  const formValues = Object.fromEntries(formData);

  fetch("https://server-9daa.onrender.com/messages", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(formValues),
  });

  console.log(JSON.stringify(formValues));
});

async function getMessages() {
  //get messages from db via api
  const response = await fetch("https://server-9daa.onrender.com/messages");
  const messages = await response.json();
  //loop through the messages and render each on on the page.

  messages.forEach((message) => {
    console.log(message);
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = message.username;
    p.textContent = message.message;

    const messageContainer = document.getElementById("messageContainer");

    messageContainer.appendChild(h3);
    messageContainer.appendChild(p);
  });
}

getMessages(); // run as page loads
