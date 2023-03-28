
import React from "react";
import ReactDOM from "react-dom/client";

// react element
const Title = () => {
  return <h1 className="heading">Namaste react jsx
  </h1>
};
const elem = (
  <h1 className="heading">Namaste react  element jsx
  </h1>
);

// react functional components
const HeadingComponent = () => {
 return (
 <>
 <div id="container">
    <Title />
    {Title()} 
    {elem}
    <Title></Title>
     <h1 className="head">Namaste React from Functional component </h1>
  </div>
  </>
 );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);