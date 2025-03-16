// MenuBoard.js
import Board from "./Board.js";

export default class MenuBoard extends Board {
  constructor() {
    super();
  }

  create() {
    const content = `
      <h1>MENU</h1>
      <h2>CENA</h2>
      <p>Ravioles con milanesa</p>
      <h2>ALMUERZO</h2>
      <p>Rosas a la vinagreta</p>
      <h2>SHOW</h2>
      <p>Carmencita Dance</p>
    `;
    this.render(content);
  }
}