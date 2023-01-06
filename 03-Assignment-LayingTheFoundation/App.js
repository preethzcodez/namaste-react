import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create 3 nested elements inside a div using createElement
const h1 = React.createElement(
  "h1",
  { id: "h1", key: "h1" },
  "React.createElement H1"
);

const h2 = React.createElement(
  "h2",
  { id: "h2", key: "h2" },
  "React.createElement H2"
);

const h3 = React.createElement(
  "h3",
  { id: "h3", key: "h3" },
  "React.createElement H3"
);

const headerDiv = React.createElement("div", { className: "title" }, [
  h1,
  h2,
  h3,
]);

// Create the above using JSX
const headerDivJSX = (
  <div className="title">
    <h1>JSX H1</h1>
    <h2>JSX H2</h2>
    <h3>JSX H3</h3>
  </div>
);

const TitleComponent = (props) => (
  <div className="title">
    <h1>H1 from TitleComponent</h1>
    <h2>H2 from TitleComponent</h2>
    <h3>H3 from TitleComponent</h3>
    {props?.children}
  </div>
);

const App = () => {
  return (
    <div>
      <HeaderComponent />
      {headerDiv}
      {headerDivJSX}
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent>
        <h4>Hi.. I'm a Child H4</h4>
      </TitleComponent>
    </div>
  );
};

// Render the container
root.render(<App />);
