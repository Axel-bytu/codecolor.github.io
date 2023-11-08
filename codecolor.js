const colorCode = document.querySelector
('#color-code')
function randomHexNumber(){
 const num = parseInt(Math.random()*16)
 if(num<10)
   return num
 return String.fromCharCode(num+55)
}
function randomHexColor(){
  return '#'+Array(6).fill(null).mapa(()
=>randomHexNumber()).join('')
}
btnGen.addEventListener('click', ()=>{
  const newColor = randomHexColor()
  const.style.background = newColor
  colorCode.textContent = newColor
)}
