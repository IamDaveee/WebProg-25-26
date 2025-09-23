

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

// Form submit:
                          // https://www.w3schools.com/jsref/event_onsubmit.asp

const formBox6 = document.getElementById('box-6')

//  document.getElementById("box-6").onsubmit = function (event)  {
              // az előző helyett elemre constanssal hivatkozva és nyílfüggvénnyel
formBox6.onsubmit = (event) => {
                            // https://www.w3schools.com/jsref/event_preventdefault.asp
  // event.preventDefault() 
  
  console.log('Az űrlap elküldésre került // submit esemény')
  // https://www.w3schools.com/jsref/obj_event.asp
  console.log('A objektum amin bekövetkezett: ', event.target)
  console.log('Az objektum elemei', event.target.elements)

  debugger
  
  // módosítsuk a doboz tartalmát az input mezőbe írt értékkel
}

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
                            // https://www.w3schools.com/jsref/event_onkeypress.asp

  document.getElementById("box7-input").onkeypress = function(event) { 
  console.log('7. doboz esemény: ', event)
  console.log('A leütött karakter:', event.key)
  // írjuk be a dobozba az adott karaktert, amit leütöttek
  
}


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

document.onmousemove = function(event) {
                          //https://www.w3schools.com/jsref/event_clientx.asp
  console.log('X: ', event.clientX)  
  // console.log('Y: ',)
  
  // írjuk be az egér pozíciójának x és y koordinátáját, a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}

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

let state = 9;

document.getElementById("box-9").onsubmit = (event) => {
  console.clear() // konzol törlése
  // event.preventDefault()
  
    console.log(event.target.elements.operand.value)
    console.log(event.target.elements.operator.value)

  const operand = ''
  const operator = ''

  switch (operator) {   }


  // eredmény beírása:  document.getElementById("element-nine")