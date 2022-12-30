// Get root element
const jsRoot = document.getElementById("js-root");

// Create a new h1 element
const jsHeading = document.createElement("h1");
jsHeading.innerHTML = "Hello from JavaScript";

// Append it to the root element
jsRoot.appendChild(jsHeading);