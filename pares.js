const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;
const evenNumbers = (numbers) => numbers.filter(isEven);
const oddNumbers = (numbers) => numbers.filter(isOdd);

const numberArray = [1,2,3,4,5,6,7,8,9,10];

console.log(evenNumbers(numberArray));
console.log(oddNumbers(numberArray));