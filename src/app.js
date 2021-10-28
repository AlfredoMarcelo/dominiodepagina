/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres = ["El", "Nuestro", "Tú"];
  let adjetivos = ["mejor", "gran", "excelente", "unico"];
  let sustantivos = ["libro", "juego", "partido", "codigo", "marcador"];
  let dominios = ["com", "cl", "es", "col", "pe"];

  for (let a of pronombres) {
    for (let b of adjetivos) {
      for (let c of sustantivos) {
        for (let d of dominios) {
          console.log(`${a}${b}${c}.${d}`);
        }
      }
    }
  }
};
