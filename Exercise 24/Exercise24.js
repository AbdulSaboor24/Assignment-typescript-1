// Test for equality and inequality with string
var string1 = 'Abdul';
var string2 = 'Saboor';
console.log("Equality test:", string1 === string2);
console.log("Inequality test:", string1 !== string2);
console.log("\n");
//Test using the lowercase function
var lowercase = 'Football';
console.log("Lowercase test:", lowercase.toLowerCase() === 'football');
console.log("Lowercase inequality test:", lowercase.toLowerCase() !== 'football');
console.log("\n");
// Numerical Test
var num1 = 10;
var num2 = 5;
console.log("Equality test:", num1 === num2);
console.log("Inequality test:", num1 !== num2);
console.log("Greater than test:", num1 > num2);
console.log("Less than test:", num1 < num2);
console.log("Greater than or equal to test:", num1 >= num2);
console.log("Less than or equal to test:", num1 <= num2);
console.log("\n");
//Test using "and" and "or" operators
var x = true;
var y = false;
console.log("AND operator:", x && y);
console.log("OR operator:", x || y);
console.log("\n");
// Test whether an item is in an array
var players = ['Messi', 'Ronaldo', 'Neymar'];
console.log("Item in array test:", players.indexOf('Messi') !== 1);
console.log("\n");
// Test whether an item is not in an array
console.log("Item not in array test:", !players.indexOf('Maradona'));
console.log("\n");
