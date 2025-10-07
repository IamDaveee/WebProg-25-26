console.log("Az első telefon neve: ")
console.log(mobilok[0].name)

console.log("A második telefon ára: ")
console.log(mobilok[1].price)

console.log("A harmadik telefon szolgáltató országa: ")
console.log(mobilok[2].provider.country)

mobilok.push({
    brand: 'Samsung',
            name: 'S25',
            provider: {
                country: 'Hu',
                name: null
            }
})

// for (let i = 0; i < mobilok.length; i++) {
//     console.log(mobilok[i])
// }
let telefon
for (const element of mobilok) {

    console.log(element)

    //brande, name értéke
    console.log(element.brand, element.name)

    //price érték,ha van, Ft-al
    if (element.price) {
        console.log(`${element.price}Ft`)
    }

    //szolgáltató, ha van
    console.log(`${element.provider.name}`)

    telefon=(`${element.brand} ${element.name} ${element.price} ${element.provider.name}`)
    console.log(telefon)
}

