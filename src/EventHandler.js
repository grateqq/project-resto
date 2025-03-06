// EventHandler.js
import HomeBoard from "./HomeBoard.js";
import MenuBoard from "./MenuBoard.js";
import ReservationBoard from "./ReservationBoard.js";

export default class EventHandler {
  constructor() {
    this.homeBoard = new HomeBoard();
    this.menuBoard = new MenuBoard();
    this.reservationBoard = new ReservationBoard();

    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById("home-btn").addEventListener("click", () => {
      this.homeBoard.create();
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
      this.menuBoard.create();
    });

    document.getElementById("reservation-btn").addEventListener("click", () => {
      this.reservationBoard.create();
    });
  }
}