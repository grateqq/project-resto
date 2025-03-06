//index.js
console.clear()
console.log("hola")
const homeBtn = document.getElementById("home-btn")
console.log(homeBtn)

homeBtn.addEventListener("click", ()=> {
  const content = document.getElementById("content");
  console.log(content)
  // //guardo el primer hijo
  // const contenthijo = content.firstElementChild
  // console.log(contenthijo) // sino existe null
  // //borrar un hijo
  // content.removeChild(contenthijo)
  while (content.firstElementChild) {
    content.removeChild(content.firstElementChild)    
  }
  
  content.innerHTML = `
    <p>home parrafo 1</p>
    <p>home parrafo 2</p>
    <p>home parrafo 2</p>
  `

})