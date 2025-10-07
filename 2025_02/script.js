// Belső állapot (kör, négyzet, téglalap)

let statusz = {
    circle : 0,
    square : 0,
    rectangle : 0
}

// 1. Selectáld ki a form elemet és submit eseményre hajson végre funkcionalitást

// 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat

// 3. Az adatok alapján módosítsd az alkalmazás belső állapotát (az alakzatokba írandó értéket)

// 4. A belső állapot alapján írd be az értékeket a formákba

// statusz.circle++
// statusz.square--

// document.getElementById("circle").innerText = statusz.circle
// document.getElementById("square").innerText = statusz.square

const form=document.getElementById("shapes")
form.onsubmit=(event)=>{
    event.preventDefault()
    const selectedShape=event.target.elements.Shape.value
    const addOrMinus=event.target.elements.action.value

    switch (selectedShape) {
        case "circle":
            if (addOrMinus=="increment") {
                statusz.circle++
            } else{
                statusz.circle--
            }
            break;
        case "square":
            if (addOrMinus=="increment") {
                statusz.square++
            } else{
                statusz.square--
            }
            break;
        case "rectangle":
            if (addOrMinus=="increment") {
                statusz.rectangle++
            } else{
                statusz.rectangle--
            }
            break;
    }

    document.getElementById("circle").innerText = statusz.circle
    document.getElementById("square").innerText = statusz.square
    document.getElementById("rectangle").innerText = statusz.rectangle
}