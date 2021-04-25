function bookDetails(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                { "title": title, "version": "BASIC", "author": "Dennis Ritchie" },
                { "title": title, "version": "CORE", "author": "James Gosling" },
                { "title": title, "version": "ADVANCED", "author": "Guido Van Russom" }
            );
        }, 1000);
    });
}

function booksBorrowed(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["let us c", "let us python", "let us java"]);
        }, 1000);
    });
}


function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ "name": username, "email": "sujith@gmail.com", "role": "ROLE_USER" })
        }, 1000);
    });
}

// login('sujith', '1234')
//     .then(user => booksBorrowed(user))
//     .then(books => bookDetails(books[2]))
//     .then(getdata => {
//         console.log(getdata);
//     })

async function displayBorrowedBookData(username, password) {
    const user = await login(username, password);
    const books = await booksBorrowed(user);
    const result = await bookDetails(books[2]);
    console.log(result);

}
displayBorrowedBookData('sujith', '7989787426');