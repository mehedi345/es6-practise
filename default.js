function add(num1, num2){

   num2 = num2 || 20;
    return num1 + num2;
}

function add(num1, num2 = 45){

  
     return num1 + num2;
 }
 const result = add(14);
console.log(result);