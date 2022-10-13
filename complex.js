const isOver18 = (person) => person.age > 17;
const isMale = (person) => person.gender === "M";
const areAllMale = (people) => people.every(isMale);
const allowedIn = (people) => people.some(isOver18);
const getAdults = (people) => people.filter(isOver18);
const getFirstAdult = (people) => people.find(isOver18);

const people = [
    { name: "Carlos", age: 20, gender: "M" },
    { name: "Benjamin", age: 21, gender: "M" },
    { name: "Elena", age: 11, gender: "F" },
    { name: "Hernan", age: 16, gender: "M" },
    { name: "Luisa", age: 32, gender: "F" }
];

console.log(allowedIn(people));
console.log(areAllMale(people));
console.log(getFirstAdult(people));