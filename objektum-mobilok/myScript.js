/*document.body.onload=()=>{
    alert("Az oldal betöltött")
}*/

mobilok.push(
    {
        brand: 'Samsung',
        name: 'S25',
        provider: {
            country: 'EN',
            name: '0'
        }
    }
)

for (const element of mobilok) {
    console.log(element)

    let brand=`${element.brand} ${element.name}`
    let price=element.price
    let provider=element.provider
    if (element.provider.name) {
        provider=`${element.provider.name} ${element.provider.country}`
    } else{
        provider="&nbsp"
    }

    if (price) {
        price + "Ft"
    } else{
        price="&nbsp"
    }

    document.getElementById("demo").innerHTML+=`
    <div class="card">
        <p>${brand}</p>
        <p>${price}</p>
        <p>${provider}</p>
    </div>`
}

for (const element of mobilok) {
    document.getElementById("phones").innerHTML+=`
    <option value="${element.brand}">${element.brand} ${element.name}</option>
    `
}


