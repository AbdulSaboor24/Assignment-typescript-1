function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You didn't select any items for your sandwich. Please Select items.");
    }
    else {
        console.log("Items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
        console.log("Enjoy your sandwich!");
    }
    console.log("----------------------");
}
order_sandwich('Egg', 'Cheese', 'Lettuce');
order_sandwich('Tomato');
order_sandwich();
