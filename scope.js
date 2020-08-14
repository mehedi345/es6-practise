
let bonus = 20; // global scope

function sum (first, second){
    let result = first + second + bonus;
    //console.log(result); local scope
    return result;
}
const output = sum(3, 5);
console.log(output);