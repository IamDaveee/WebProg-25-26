const container=document.getElementById("main")

for (const element of figures) {
    if (element.cover) {
        container.innerHTML+=`
            <figure style="order: 0; flex-grow: 1;">
                <figcaption>${element.caption}</figcaption>
                <img src="${element.image}" title="${element.caption}" loading="lazy">
                <p>${element.text?element.text:""}</p>
            </figure>
        `
    }
    else{
        container.innerHTML+=`
            <figure>
                <figcaption>${element.caption}</figcaption>
                <img src="${element.image}" title="${element.caption}" loading="lazy">
                <p>${element.text?element.text:""}</p>
            </figure>
        `
    }
}