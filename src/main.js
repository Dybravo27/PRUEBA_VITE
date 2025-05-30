import "./style.css";
import { sumar, restar, restablecer } from "./module";
import 'remixicon/fonts/remixicon.css'
import 'sweetalert2/src/sweetalert2.scss'
import 'animate.css';


const div = document.querySelector("#app");
const div2 = document.createElement("div");
div2.classList.add("app-content");
const div_content = document.createElement("div");
div_content.classList.add("content_button");
const div_span = document.createElement("div");
const span = document.createElement("span");
span.classList.add("text_span");
span.textContent = "0";

const boton_sumar = document.createElement("button");
boton_sumar.classList.add("button");
boton_sumar.classList.add("button__sumar");
const icon_sumar = document.createElement("i");
icon_sumar.classList.add("ri-add-large-line");

const boton_restar = document.createElement("button");
boton_restar.classList.add("button");
boton_restar.classList.add("button__restar");
const icon_restar = document.createElement("i");
icon_restar.classList.add("ri-subtract-line");


const boton_restablecer = document.createElement("button");
boton_restablecer.classList.add("button");
boton_restablecer.classList.add("button__restablecer");
const icon_restablecer = document.createElement("i");
icon_restablecer.classList.add("ri-refresh-line");

div.append(div2);
div2.append(div_span, div_content);
div_span.append(span);
boton_sumar.append(icon_sumar);
boton_restar.append(icon_restar);
boton_restablecer.append(icon_restablecer);
div_content.append(boton_sumar, boton_restar, boton_restablecer);

// const contador = document.querySelector("div#app > div > div > span");
const contador = document.querySelector(".text_span");

boton_sumar.addEventListener("click", (e) => {
  if (e.target.closest(".button__sumar"))
  {
    contador.textContent = sumar();
  }
});
boton_restar.addEventListener("click", (e) => {
  if (e.target.closest(".button__restar"))
  {
    contador.textContent = restar();
  }
});
boton_restablecer.addEventListener("click", (e) => {
  if (e.target.closest(".button__restablecer"))
  {
    contador.textContent = restablecer();
  }
});