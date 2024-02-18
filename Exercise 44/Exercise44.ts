function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You didn't select any items for your sandwich. Please Select items.");
    } else {
        console.log("Items:");

        for (let item of items) {
            console.log(`- ${item}`);
        }

        console.log("Enjoy your sandwich!");
    }
    console.log("----------------------");
}

order_sandwich('Egg', 'Cheese', 'Lettuce');
order_sandwich('Tomato');
order_sandwich();