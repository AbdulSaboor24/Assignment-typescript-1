function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// How to call a Function making custom T-shirt

make_shirt(); // This makes the default T-shirt (size:large, messsage: I Love TypeScript) as mentioned above

make_shirt("medium"); // This makes the T-shirt size Medium and with the default message

make_shirt("small", "TypeScript is awesome!"); // this completely makes a customized T-shirt with a customized message