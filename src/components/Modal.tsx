import React from "react";
import ReactDOM from "react-dom";

export default function Modal() {
  const elementHTML: Element = document.getElementById("modal")!;
  return ReactDOM.createPortal(
    <>
      <h2>Soy un modal</h2>
    </>,
    elementHTML
  );
}
