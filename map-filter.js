const numbers = [3, 4, 6, 7, 9, 6];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }
// const result = numbers.map(function(element, index, array){
//    return element;
// })

// const result = numbers.map(element => element * element);
//  console.log(result);

// filter

const bigger = numbers.filter( x => x < 5);
console.log(bigger);