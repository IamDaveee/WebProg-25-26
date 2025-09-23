
// 1.

// render
    // egy elem CSS osztályának nevét adja vissza
    element.classList
    // https://www.w3schools.com/jsref/prop_element_classlist.asp

    element.classList.toggle("mystyle");
    https://www.w3schools.com/howto/howto_js_toggle_class.asp

    element.classList.add('myStyle')
    element.classList.remove('myStyle')


// 3, 4

// az összes olyan gyermekelemet, amely megfelel a szelektoro(k)nak
// https://www.w3schools.com/jsref/met_element_queryselector.asp
element.querySelector('.className')
element.querySelector('.className').children

// https://www.w3schools.com/jsref/met_element_queryselectorall.asp
element.querySelectorAll(".example")
console.dir( element.querySelectorAll(".example") )

// https://www.w3schools.com/js/js_loop_forof.asp
for (variable of iterable) {
    // code block to be executed
}

// 4
    // a megadott elem első gyermek elemét adja vissza
    // https://www.w3schools.com/jsref/prop_element_firstelementchild.asp
    element.firsElementChild.

// 5.

// váarkozás
    setTimeout( function() {
        
    }, timeout);
    // nyílfüggvénnyel
    setTimeout(() => {
        
    }, timeout);
