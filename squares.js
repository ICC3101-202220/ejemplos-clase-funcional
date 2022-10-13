const square = (number) => number ** 2;
const squares = (numbers) => numbers.map(square);

const numberArray = [1,2,3,4,5,6,7,8,9,10];

console.log(squares(numberArray));