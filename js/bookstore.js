const addbookbtn = document.querySelector("#addbookbtn");
const updatebook = document.querySelector("#updatebookForm");
const addbook = document.querySelector("#addbook");
var i = -1;
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
addbookbtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Add ",addbook);
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
    }
    showBooks(books)

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

const updateBtn = document.querySelector("#updatebookbtn");

updateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("In update button")
    const updatebook = document.querySelector("#updatebookForm");
    console.log(i);
    console.log(this.i);
    console.log(updatebook);
    let b = { title: updatebook.title.value, author: updatebook.author.value, price: updatebook.price.value }
    console.log("updated book " + b);
    if (this.i >= 0) {
        console.log("in if");
        this.books.pop(i)
        console.log(this.i);
    }
    showBooks(books);
})

function editBook(title) {
    let index = indexOf(title);
    let book = books[index];
    console.log(book);
    this.i = index;
    updatebook.title.value = book.title;
    updatebook.author.value = book.author;
    updatebook.price.value = book.price;
}

document.querySelector("#search").addEventListener('keyup', (search) => {
    search.preventDefault();
    let searchBooks = books.filter(book => book.title.includes(search.target.value));
    showBooks(searchBooks);
})

