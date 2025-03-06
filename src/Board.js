// Board.js
export default class Board {
  constructor() {
    this.content = document.getElementById("content");
  }

  clear() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.firstChild);
    }
  }

  render(content) {
    this.clear();
    this.content.innerHTML = content; 
  }
}
