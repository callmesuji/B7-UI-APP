showtable = function () {
    const num = document.querySelector("#id_input_num").value;
    let str = "";
    for (let i = 1; i <= 10; i++) {
        str += `<br/>${num} * ${i} = ${num * i}`;
    }
    document.querySelector("#printtable").innerHTML = str;
}

names = ["sujith", "mahesh", "rajesh", "suresh"];
const print_names = document.querySelector("#id_print_name");
const dispaly = (names) => {
    let str = "";
    names.forEach((name) => {
        str += `<li>${name}</li>`
    })
    print_names.innerHTML = str;
}
dispaly(names);
const input_name = document.querySelector("#id_input_name");
const add_name = document.querySelector("#id_add_user");

add_name.addEventListener('click', () => {
    let name = input_name.value;
    if (name.trim() != "") {
        names.push(name);
        dispaly(names);
        input_name.value = "";
    } else {
        alert("name can't be empty")
    }
})

const reverse = (num) => {
    let rev = 0;
    while (num != 0) {
        let r = num % 10;
        rev = rev * 10 + r;
        num = Number.parseInt(num / 10);

    }
    return rev;

}

const factorial = (num) => {
    if (num == 0 || num == 1)
        return 1;
    let res = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
}

const isprime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
const showresult = document.querySelector("#showResult")
const btnreverse = document.querySelector("#btnreverse")
btnreverse.addEventListener('click', () => {
    const num = document.querySelector("#inputNum").value;
    showresult.innerHTML = "";
    const res = reverse(num);
    showresult.innerHTML = `<h3>reverse of ${num} is ${res}</h3>`
})

const btnfactorial = document.querySelector("#btnfactorial")
btnfactorial.addEventListener('click', () => {
    showresult.innerHTML = "";
    const num = document.querySelector("#inputNum").value;
    let res = factorial(num);
    showresult.innerHTML = `<h3>factorial of ${num} is ${res}</h3>`
})

btnprime = document.querySelector("#btnprime")
btnprime.addEventListener('click', () => {
    showresult.innerHTML = "";
    let num = document.querySelector("#inputNum").value;
    let res = isprime(num)
    if (res == true) {
        showresult.innerHTML = `<h3>${num} is a prime</h3>`
    } else {
        showresult.innerHTML = `<h3>${num} not a prime</h3>`
    }
})

const btnsubmit = document.querySelector("#btnsubmit")
const num1Ele = document.querySelector("#num1")
const num2Ele = document.querySelector("#num2")
btnsubmit.addEventListener('click', () => {
    let num1 = Number.parseFloat(num1Ele.value)
    let num2 = Number.parseFloat(num2Ele.value)
    let res = num1 + num2
    document.querySelector("#result").value = `${num1} + ${num2} = ${res}`

})