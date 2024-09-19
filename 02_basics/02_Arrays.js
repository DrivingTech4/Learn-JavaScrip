

const heros = ["bagat", "patel", "subhas"]

const bolyheros = ["akshay", "ritesh", "john"]

//heros.push(bolyheros)

//console.log(heros);
//console.log(heros(3)[1]);
//console.log(heros.concat(bolyheros));
const allheros = heros.concat(bolyheros)

console.log(allheros);

//const allnewheros = [...heros,...bolyheros]
//console.log(allheros);

let A = ["a", "b" ,"c", "d"]
let B = ["e", "f", "g", "h"]
let C = A.concat(B)
let D = [...A,...B]

//console.log(D);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, [7, 9]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

Array.isArray("Dhwani")
console.log(Array.isArray("Dhwani"));

console.log(Array.from({name: "Dhwani"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// Array.isarray,  Array.from,  Array.flat  .








 

