// index.js
//CSS
import "./styles.css";
// HTML - Punto de entrada
import { greeting } from "./greeting.js";
console.log(greeting);
//IMG

import odinImage from "./odin.svg";
   
const image = document.createElement("img");
image.src = odinImage;
document.body.appendChild(image);
