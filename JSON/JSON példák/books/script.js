const booksJson='{"store":{"book":[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99}],"bicycle":{"color":"red","price":19.95}}}'

const books=JSON.parse(booksJson).store.book

const container=document.getElementById("books")

for (const element of books) {
    container.innerHTML+=`
        <div class="card">
            <p>Category: ${element.category}</p>
            <figure>
                <figcaption>
                    <img src="./pics/Evelyn_Waugh-Sword_of_Honour.jpg" alt="" title="${element.title}">
                </figcaption>
                <figcaption>
                    ${element.author}<br>
                    ${element.isbn?`<p>Isbn: ${element.isbn}</p>`:""}
                </figcaption>
            </figure>
            <p>Szerző: ${element.author}</p>
            <p>Cím: ${element.title}</p>
            <p>Ár: &euro;.${element.price}</p>
            ${element.isbn?`<p>Isbn: ${element.isbn}</p>`:""} 
        </div>
    `
}