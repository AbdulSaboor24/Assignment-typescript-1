var favoritePizzas = ["Chiken tikka", "fajita", "BBQ Chicken"];
// Printing pizza names:
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Printing sentences about pizza:
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
console.log("\nI really love pizza!");
