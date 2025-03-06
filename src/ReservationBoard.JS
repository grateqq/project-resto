// ReservationBoard.js
import Board from "./Board.js";

export default class ReservationBoard extends Board {
  constructor() {
    super();
  }

  create() {
    const content = `
      <h1>Reservaciones</h1>
      <h2>Teléfono: 4422990</h2>
      <h2>WhatsApp: 2996545487</h2>
      <p>Reservas según disponibilidad</p>
    `;
    this.render(content); 
  }
}