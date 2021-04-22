let books = [
    {
        title: "AN INTEGRATED APPROACH",
        author: "R. NAGESWARA RAO",
        price: 550
    },
    {
        title: "CORE JAVA",
        author: "YASWANTH",
        price: 395
    },
    {
        title: "LET US C ",
        author: "YASWANTH",
        price: 450
    },
    {
        title: "LET US PHP",
        author: "YASWANTH",
        price: 200
    }
]
let bookcontent = document.querySelector("#bookcontent");
function showBooks(inputBooks) {
    bookcontent.innerHTML = "";
    let html = "";
    inputBooks.forEach(book => {
        html += `
        <div class='col col-md-4 mt-2'>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: <strong>${book.author}</strong><br> Price:  <i class='fa fa-inr'></i><strong>${book.price}</strong></p>
            <span style='float:right'>
                <i class='fa fa-edit' data-toggle="modal" data-target="#updateModel" onclick="editBook('${book.title}')"></i>&nbsp; <i class='fa fa-trash' onclick="deleteBook('${book.title}')"></i>
            </span>
        </div>
        </div>
        </div>
        `
    });
    bookcontent.innerHTML = html;
}
showBooks(books);
const addbookbtn = document.querySelector("#addbookbtn");
const addbook = document.querySelector("#addbook");
addbookbtn.addEventListener('click', (event) => {
    event.preventDefault();
    let book = { title: addbook.title.value, author: addbook.author.value, price: addbook.price.value }
    if (addbook.title.value === "" || addbook.title.author === "" || addbook.title.price === "") {
        alert("Please Enter All the Options")
    }
    else {
        addbook.reset();
        books.push(book);
        document.querySelector(".close").click();
        showBooks(books);
    }
})

function deleteBook(title) {
    let res = confirm("ARE YOU SURE TO DELETE : " + title + " ?");
    if (res) {
        books = books.filter(book => book.title !== title);
        showBooks(books)
    }
}
function indexOf(title) {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book.title === title) {
            return i;
        }
    }
    return -1;
}
const updatebook = document.querySelector("#updatebook")

function editBook(title) {

    let index = indexOf(title);
    let book = books[index];
    console.log(book);
    updatebook.title.value = book.title;
    updatebook.author.value = book.author;
    updatebook.price.value = book.price;
    

    
}