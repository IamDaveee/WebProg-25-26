const slideshow=document.getElementById("slideshowId")
let count=3
for (const element of fejlec) {
    if (count%3==0) {
        slideshow.innerHTML+=`
            <div class="dia carousel-item active">
                <img src="${element.img}" alt="" class="d-block img-fluid w-100">
                <div class="carousel-caption d-none d-md-block caption-center dia-elem-szovegdoboz">
                    <h3>${element.cim}</h3>
                    <p>${element.leiras}</p>
                </div>
            </div>
        `
    }else{
        slideshow.innerHTML+=`
            <div class="dia carousel-item">
                <img src="${element.img}" alt="" class="d-block img-fluid w-100">
                <div class="carousel-caption d-none d-md-block caption-center dia-elem-szovegdoboz">
                    <h3>${element.cim}</h3>
                    <p>${element.leiras}</p>
                </div>
            </div>
        `
    }
    count--;
}

const source=document.getElementById("source-row")
for (const element of autok) {
    source.innerHTML+=`
        <div class="card h-100 col-md-4 col-sm-12">
            <a href="#"><img class="card-img-top" src="${element.img}" alt="${element.nev}"></a>
            <div class="card-body">
                <h4 class="card-title">
                    <a href="#">${element.nev}</a>
                </h4>
                <h5>${element.ar}</h5>
                <p class="card-text">${element.leiras}</p>
            </div>
        </div>
    `
}