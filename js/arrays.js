console.log("hello")
const names = ["john", "tom", "ronaldo", "messi", "sujith", "suresh", "mahesh"];
console.log(names.splice(names, 1))
console.log("index is : " + names.indexOf("sujith"));
names.push("lakshman");
names.shift();
console.log("name is : " + names[2])
names.forEach(name => {
    console.log(name);
});
console.log(names)
names.pop();
console.log(names)
// print even numbers in the array

let nums = [1, 2, 3, 4, 7, 11, 13, 12, 14, 17, 19, 23, 29, 18, 20, 22];
const odd_arr = [];
nums.forEach(ele => {
    if (ele % 2 == 0) {
        odd_arr.push(ele)
    }
})
console.log("odd numbers are " + odd_arr);
// predicate
const even_nums = nums.filter(ele => ele % 2 != 0)
console.log(even_nums);
// sum of numbers
numbers = [1, 2, 3, 4, 55, 5, 6, 7, 8, 9, 10, 12];
// sum = 0;
// numbers.forEach(ele => {
//     sum += ele;    
// });
// console.log(sum)
const add = (a, b) => a + b;
//let sum = numbers.reduce((a, b) => a + b);
let sum = numbers.reduce(add)
console.log(sum);
// biggest element
let big = numbers[0];
for (let i = 0; i <= numbers.length; i++) {
    if (big < numbers[i]) {
        big = numbers[i];
    }
}
console.log("big element is " + big);

const big_ele = numbers.reduce((a,b)=> a > b ? a : b);
console.log("the biggest :- "+big_ele)

const add_all = numbers.reduce((a,b)=>a+b);
console.log("sum is"+add_all)
