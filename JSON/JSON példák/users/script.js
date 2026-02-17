const string1='{"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral","text":"Tired of writing endless social media content? Let Content Caddy generate it for you."},"_meta":{"powered_by":"ReqRes","docs_url":"https://app.reqres.in/documentation","upgrade_url":"https://app.reqres.in/upgrade","example_url":"https://app.reqres.in/examples/notes-app","variant":"v1_a","message":"Classic ReqRes still works. Projects add persistence, auth, and logs.","cta":{"label":"See example app","url":"https://app.reqres.in/examples/notes-app"},"context":"legacy_success"}}'

const elso=JSON.parse(string1).data

const string2='{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral","text":"Tired of writing endless social media content? Let Content Caddy generate it for you."},"_meta":{"powered_by":"ReqRes","docs_url":"https://app.reqres.in/documentation","upgrade_url":"https://app.reqres.in/upgrade","example_url":"https://app.reqres.in/examples/notes-app","variant":"v1_a","message":"Classic ReqRes still works. Projects add persistence, auth, and logs.","cta":{"label":"See example app","url":"https://app.reqres.in/examples/notes-app"},"context":"legacy_success"}}'

const masodik=JSON.parse(string2).data

let merged=elso.concat(masodik)
console.log(merged)

const container=document.getElementById("users")
let counter=1
function loadUsers(){
    for (const element of merged) {
        container.innerHTML+=`
            <div class="card">
                <input type="checkbox" class="checkbox" data-id="${counter}">
                <img src="${element.avatar}" alt="" data-id="${counter}">
                <p data-id="${counter}">ID: ${element.id}</p>
                <p data-id="${counter}">First Name: ${element.first_name}</p>
                <p data-id="${counter}">Last Name: ${element.last_name}</p>
                <p data-id="${counter}">Email: ${element.email}</p>
                <button class="deleteButton" data-id="${counter}">Delete this user</button>
            </div>
        `
        counter++
    }
}
loadUsers()

const myForm = document.myForm
// a form neve (name attribútum értéke) alapján, a form eléréséhez konstans 

myForm.onsubmit = (event) => {

    event.preventDefault()  
        // https://www.w3schools.com/JsrEF/event_preventdefault.asp
        // nem tölti újra az oldalt, ezáltal nem "törli" (állítja lapértékre) a beviteli mezőket

    console.log(myForm.file.value)
    
    const file = myForm.file.files[0]
    const firstName=myForm.firstName.value
    const lastName=myForm.lastName.value
    const email=myForm.email.value
    console.log(firstName, lastName, email)
    
    let fileURL = 'https://tinyurl.com/3my9yceh' // URL rövidítő https://tinyurl.com/
    fileURL = 'https://gravatar.com/avatar/8d53bd57d8cc255d1223ef7cb29e4d00?d=mm&s=160'
    
    // fileURL = file ? (URL.createObjectURL(file)) : 'https://tinyurl.com/3my9yceh'

    if (file) { 
        fileURL = (URL.createObjectURL(file))
        console.log (fileURL)
    }
        
    //document.getElementById("preview").src = fileURL

    const newUser=`'{"data":[{"id":${counter},"email":"${email}","first_name":"${firstName}","last_name":"${lastName}","avatar":"${fileURL}"}]}'`
    counter++

    console.log(newUser)
    merged.concat(JSON.parse(newUser).data)
    console.log(merged)
    container.innerHTML=""
    loadUsers()
    
    myForm.reset()
        // "törli" (állítja lapértékre) a beviteli mezőket
}