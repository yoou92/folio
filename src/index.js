import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import background from "./assets/resume.png";

const Resume = () => {

  return (
    <div class="w-full h-full flex justify-center p-4 bg-gradient-to-br from-main to-secondary">
      <img src={background} alt="resume" />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root"),
  document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
      elements[i].oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
          e.target.setCustomValidity("Ce champ doit être complété");
        }
      };
      elements[i].oninput = function (e) {
        e.target.setCustomValidity("");
      };
    }
  })
);
