"use strict";
let neme = "Zia Khan";
console.log(neme.toLowerCase());
console.log(neme.toUpperCase());
function totitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(totitleCase("zia khan"));
