const container=document.getElementById("main")
let count=0;
for (const element of figures) {
    if (element.cover) {
        container.innerHTML+=`
            <figure style="order: 0; flex-grow: 1;">
                <figcaption>${element.caption}</figcaption>
                <img src="${element.image}" title="${element.caption}" loading="lazy">
                <p>${element.text?element.text:""}</p>
            </figure>
        `
        count+=element.days?element.days:0
    }
    else{
        container.innerHTML+=`
            <figure>
                <figcaption>${element.caption}</figcaption>
                <img src="${element.image}" title="${element.caption}" loading="lazy">
                <p>${element.text?element.text:""}</p>
            </figure>
        `
        count+=element.days?element.days:0
    }
}

document.getElementById("footer").innerHTML+=`<p>Ezek a képek összesen ${count} nap, vagyis ${Math.round(count/365, 2)} év alatt készültek</p>`