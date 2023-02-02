
import React from "react";
import ReactDOM from "react-dom";

export default function Home(){
  return (
    <div>
      <div>Homepage</div>
      <button onClick={() => console.log("click me")}>click me</button>
    </div>
  );
};

if (globalThis["document"]) {
  ReactDOM.render(<Home />, document.getElementById("root"));
}