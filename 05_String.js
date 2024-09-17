 
 let name = "dhwani"
 let repoCount = 40

//console.log(name + repoCount + " Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('dhwani-baby-princess')

console.log(gamename[2]);
console.log(gamename.__proto__);

// console.log(gamename. length);

//console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
//console.log(gamename.indexOf('a'));

const newString = gamename.substring(0, 6)
console.log(newString);

const anotherString = gamename.slice(-8, 4)

console.log(anotherString);

const newStringOne = "    Dhwani   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhwani.com/dhwani%50chaudhary"
console.log(url.replace('%50',  '-'));

console.log(url.includes('dhwani'));

console.log(url.includes('baby'));

console.log(gamename.split('-'));




const StringOne = "Dhwani"
const StringTwo = "Vaanu"
let StringThree = StringOne.concat(" is sister of ", StringTwo )
//console.log(StringThree);

