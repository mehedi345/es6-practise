const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length ; i++){
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square);
// }
// console.log(output);
const result = numbers.map(function (element){
    
    return element * element;
})
const result2 = numbers.map(x => x * x);
console.log(result2);

const smaller = numbers.find(x => x < 5);
console.log(smaller);

const result3 = numbers.filter(x => x < 5);
console.log(result3);

