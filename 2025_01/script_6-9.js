/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

document.getElementById("box-6").onsubmit=(event)=>{
  event.preventDefault()
  console.dir(event)
  console.log(event.target.elements.boxNumber.value)
  document.getElementById("element-six-span").innerText=event.target.elements.boxNumber.value
}


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

document.getElementById("box7-input").onkeydown=(event)=>{
  console.dir(event.key)
  document.getElementById("seven-span").innerText=event.key
}

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

document.onmousemove=(event)=>{
  console.dir(event.clientX, event.clientY)
  document.getElementById("element-eight").firstElementChild.innerText=`X: ${event.clientX}\nY: ${event.clientY}`
}

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

document.getElementById("box-9").onsubmit = (event) => {
  event.preventDefault()

  const operator = event.target.elements.operator.value
  console.log(operator)
  const operand = parseInt(event.target.elements.operand.value, 10) // convert to int
  console.log(operand)
  const boxNumber = parseInt(document.getElementById("element-nine").firstElementChild.innerText, 10) // convert to int
  console.log(boxNumber)

  let total = 0
  switch (operator) {
    case "mult":
      total = boxNumber * operand
      break
    case "div":
      total = boxNumber / operand
      break
    case "add":
      total = boxNumber + operand
      break
    case "sub":
      total = boxNumber - operand
      break
  }

  console.log(total)
  document.getElementById("element-nine").firstElementChild.innerText = total
}


// document.formBoxNine.onsubmit=(event)=>{
//   event.preventDefault()
//   console.dir(event)
// }