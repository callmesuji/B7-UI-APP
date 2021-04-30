const details = document.querySelector("#usersubmit");

// const u_image = document.querySelector("#userimage");

const userdetails = document.querySelector(".displaydetails");
const u_gender = document.getElementById('gender').value;


details.addEventListener('click', (event) => {
    event.preventDefault();

    let u_name = document.querySelector("#username").value;
    let u_email = document.querySelector("#useremail").value;
    let image = document.getElementById('output');

    let html = "";

    html += `
        <h3>NAME : ${u_name}</h3>
        <h3>EMAIL : ${u_email}</h3>      
        <h3>Gender : ${u_gender}</h3>      
        `
    userdetails.innerHTML = html;


});

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};