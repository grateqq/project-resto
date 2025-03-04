import restobarIamge from "./restobar.jpg"
const content = document.getElementById("content")
content.innerHTML= `
    <h1>Resto Bar Cantarico</h1>
    <img src=${restobarIamge} alt="restobar" class="img-front">
    <h2>Almuerzos variados</h2>
    <p>Nuestro cheft presenta su carta variada carnes, pescados, verduras de estación</p>
    <h2>Cenas con shows</h2>
    <p>Conoce nuestras cenas y descubri un nueva experiencia cada viernes</p>
    `