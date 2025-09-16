/*
  - element JS reprezentációja: document.getElementById('element-one')
  - esemény kiválasztása: onclick
  - funkcionalitás leírása: function () {...}
*/


console.log(document.getElementById("element-one"))
console.dir(document.getElementById("element-one"))
const box1=(document.getElementById("element-one"))

console.log(box1)

  // state (belső állapot)
  /* action (esemény)
    // state change
    // render
  */

/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/

let isBlur = false
function FunctionBlur(){
  box1.style.filter="blur(3px)"
}

// let arrowFunctionBlur=()=>{
//   box1.style.filter="blur(10px)"
// }
// arrowFunctionBlur()

function myFunction(){
  box1.style.color="white"
}

box1.addEventListener("click", function(){
  console.log("Box1-Clicked")
})

box1.onclick=()=>{
  // box1.style.filter="blur(3px)"
  // box1.style.textShadow="black 2px 2px 2px"

  //box1.classList.toggle("blur")

  isBlur = !isBlur
  if (isBlur) {
    box1.classList.remove("blur")
  } else {
    box1.classList.add("blur")
  }
}



/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

const box2=document.getElementById("element-two")
let isMouseOver=true

box2.onmouseover = ()=>{
  isMouseOver=!isMouseOver
  rednderBox2()
  console.log("mouseOnOver")
  //box2.style.backgroundColor="red"
}
box2.onmouseout=()=>{
  isMouseOver=!isMouseOver
  rednderBox2()
  //box2.style.backgroundColor=""
}

function rednderBox2(){
  if (isMouseOver) {
    box2.style.backgroundColor=""
  } else{
    box2.style.backgroundColor="red"
  }
}
/*
3. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/


/*
4. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

/*
5. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/
