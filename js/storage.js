// let names = ["sujith", "rajesh", "mahesh", "suresh"];
// localStorage.setItem("names", JSON.stringify(names));
// let local_names = JSON.parse(localStorage.getItem("names"));
// console.log(local_names)

let contacts = [
    { "name": "sujith", "email": "sujith@gmail.com", "phone no": 79897878426 },
    { "name": "rajesh", "email": "rajesh@gmail.com", "phone no": 98876523451 }
]
localStorage.setItem("contacts", JSON.stringify(contacts));

function addContact(contact){

        let l_contacts = JSON.parse(localStorage.getItem("contacts"));
        l_contacts.push(contact);
        localStorage.setItem("contacts",JSON.stringify(l_contacts));

}

addContact({"name":"Sujith","email":"sujith@gmail.com","mobile":9876544443});