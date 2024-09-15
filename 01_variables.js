const accountId = 550512
let accountEmail = "dhwani@apple.com"
var accountPassword = "12345"
accountCity = "Delhi"
// accountId = 2 // not allowed

accountEmail = "dc@dc.com"
accountPassword = "12323"
accountCity = "Noida"
let accountState;
/* Prefer not use var because of isuue in block scope and functional scope 
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



