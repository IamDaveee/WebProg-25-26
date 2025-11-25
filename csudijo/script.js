console.clear()

for (const element of Menu) {
    document.getElementById("nav-ul").innerHTML+=`<li class="nav-item"><a href="${element.href}" title="${element.title}" class="nav-link">${element.text}</a></li>`
}

const container=document.getElementById("card-row");
for (const element of Etelek) {
    container.innerHTML+=`
        <div class="card col-md-6 col-12" title="${element.title}">
            <img class="card-img-top" src="${element.image}" alt="${element.title}">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
            </div>
        </div>
    `
}