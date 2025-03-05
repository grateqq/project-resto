// index.js
import restobarIamge from "./restobar.jpg"

const homeBoard =(function () {
  
  const createHomeBoard= ()=> {
  
    const content = document.getElementById("content")
    content.innerHTML= `
      <h1>Resto Bar Cantarico</h1>
      <img src=${restobarIamge} alt="restobar" class="img-front">
      <h2>Almuerzos variados</h2>
      <p>Nuestro cheft presenta su carta variada carnes, pescados, verduras de estación</p>
      <h2>Cenas con shows</h2>
      <p>Conoce nuestras cenas y descubri un nueva experiencia cada viernes</p>
      `
    }
    createHomeBoard();
    return {createHomeBoard}
  })();

  const reservationBoard =(function () {
  
    const createReservationBoard= ()=> {
      
      const content = document.getElementById("content")
        content.innerHTML= `     
          <h1>resevaciones</h1>
          <h2>telefono: 4422990 </h2>
          <h2>whatapp: 2996545487</h2>
          <p>Reservas según disponibilidad</p>
        `
      }
    
      return {createReservationBoard}
    })();


const Board = (function () {
  const clearBoard = ()=> {
    const content = document.getElementById("content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

  }
  return {clearBoard}
})();

const menuBoard = (function() {
  const creteMenuBoard = ()=>{
    const content = document.getElementById("content");
    content.innerHTML= `
      <h1>MENU</h1>
      <h2>CENA</h2>
      <p>ravioles con milanesa</p>
      <h2>ALMUERZO</h2>
      <p>rosas a la vinagreta</p>
      <h2>SHOW</h2>
      <p>Carmencita Dance</p>
    `
  }
  return {creteMenuBoard}
})();

const menuBton = document.getElementById("menu-btn");
menuBton.addEventListener("click", function () {
  Board.clearBoard()
  menuBoard.creteMenuBoard()
})


const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", function () {
  Board.clearBoard()
  homeBoard.createHomeBoard()
})

const reservationBtn = document.getElementById("reservation-btn");
reservationBtn.addEventListener("click", function () {
  Board.clearBoard()
  reservationBoard.createReservationBoard()
})



// const test = (function() {
//   const cretebtn = () => {
//   const body = document.querySelector("body");
//   console.log(body)
//   const HistoryBtn = document.createElement("button")
//   HistoryBtn.innerText = "History"
//   body.appendChild(HistoryBtn)
//   }
//   cretebtn()
//   return cretebtn
// })();

