const inputNumEle = document.querySelector("#inputNum");
const showTable = document.querySelector("#showTable");

inputNumEle.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        let num = Number.parseInt(inputNumEle.value);
        if (num !== "") {
            let html = "";
            for (let i = 1; i <= 10; i++) {
                html += `<p class="lead">${num} * ${i} = ${num * i}</p>`
            }
            showTable.innerHTML = html;
        } else {
            showTable.innerHTML = "";
        }
    }

})

function addTwoNumbers(ope) {
    const num1Ele = document.querySelector("#num1")
    const num2Ele = document.querySelector("#num2")
    const num3Ele = document.querySelector("#num3")

    if (num1Ele.value === "" || num2Ele.value === "") {
        num3Ele.value = "";
        alert("number cant be empty");
        return;
    }
    let num1 = Number.parseInt(num1Ele.value);
    let num2 = Number.parseInt(num2Ele.value);
    let res;
    switch (ope) {

        case "add":
            res = num1 + num2;
            num3Ele.value = `${num1} + ${num2} = ${res}`
            break;
        case "sub":
            res = num1 - num2;
            num3Ele.value = `${num1} - ${num2} = ${res}`
            break;
        case "mul":
            res = num1 * num2
            num3Ele.value = `${num1} * ${num2} = ${res}`
            break;
        case "div":
            res = num1 / num2;
            num3Ele.value = `${num1} / ${num2} = ${res}`
            break;
        case "mod":
            res = num1 % num2;
            num3Ele.value = `${num1} % ${num2} = ${res}`
            break;
    }

}

document.querySelector("#add").addEventListener('click', (event) => {
    console.log(event.target.value)
    event.preventDefault();
    addTwoNumbers(event.target.value);
})
document.querySelector("#subBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addTwoNumbers(event.target.value);
})
document.querySelector("#mulBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addTwoNumbers(event.target.value);
})
document.querySelector("#divBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addTwoNumbers(event.target.value);
})
document.querySelector("#modBtn").addEventListener('click', (event) => {
    event.preventDefault();
    addTwoNumbers(event.target.value);
})

const users = [
    { name: "sujith", about: "my name is sujith,i completed B.E in NCET college in the stream of CSE" },
    { name: "rajesh", about: "my name is rajesh, i completed B.E in NCET college in the stream of CSE" },
    { name: "manjunath", about: "my name is manjunath, i completed B.E in NCET college in the stream of CSE" },
    { name: "gokul", about: "my name is gokul, i completed B.E in NCET college in the stream of CSE" },
    { name: "achal", about: "my name is achal, i completed B.E in NCET college in the stream of CSE" },
    { name: "mahesh", about: "my name is mahesh, i completed B.E in NCET college in the stream of CSE" },
];
let html = "";
users.forEach(user => {
    html += `<div class="col-md-3">
    <div class="card mt-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">name: ${user.name}</h5>
      <p class="card-text"><strong>ABOUT </strong>: ${user.about}</p>
      <a href="#" class="btn btn-primary">More Details</a>
    </div>
  </div>
  </div>`
});
document.querySelector("#userdata").innerHTML = html;