// HomeBoard.js
import Board from "./Board.js";
import restobarImage from "./restobar.jpg";

export default class HomeBoard extends Board {
  constructor() {
    super();
  }

  create() {
    const content = `
      <h1>Resto Bar Cantarico</h1>
      <img src=${restobarImage} alt="restobar" class="img-front">
      <h2>Almuerzos variados</h2>
      <p>Nuestro chef presenta su carta variada: carnes, pescados, verduras de estación</p>
      <h2>Cenas con shows</h2>
      <p>Conoce nuestras cenas y descubre una nueva experiencia cada viernes</p>
    `;
    this.render(content);
  }
}