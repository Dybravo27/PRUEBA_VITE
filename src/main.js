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
boton_sumar.textContent = "+";

const boton_restar = document.createElement("button");
boton_restar.classList.add("button");
boton_restar.textContent = "-";

const boton = document.createElement("button");
boton.classList.add("button");
boton.textContent = "RESTABLECER";

div_content.append(boton_sumar, boton_restar, boton);
div_span.append(span);
div.append(div2);
div2.append(div_span, div_content);

const contador = document.querySelector("div#app > div > div > span");

boton_sumar.addEventListener("click", () => {
  contador.textContent = sumar();
});
boton_restar.addEventListener("click", () => {
  contador.textContent = restar();
});
boton.addEventListener("click", () => {
  contador.textContent = restablecer();
});