import React from 'react';
import ReactDOM from 'react-dom/client';

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create a new h1 element
const header1 = React.createElement(
  "h1",
  { id: "header", key: 0 },
  "Hello !!! I am Ignited"
);

// Create a new h2 element
const header2 = React.createElement(
  "h2",
  { id: "header2", key: 1 },
  "Parcel is a Beast !!!"
);

// Create a div container with h1 and h2
const container = React.createElement("div", { id: "container" }, [
  header1,
  header2,
]);

// Render the container
root.render(container);
