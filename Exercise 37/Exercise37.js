function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// How to call a Function making custom T-shirt
make_shirt(); // This makes the default T-shirt (size:large, messsage: I Love TypeScript) as mentioned above
make_shirt("medium"); // This makes the T-shirt size Medium and with the default message
make_shirt("small", "TypeScript is awesome!"); // this completely makes a customized T-shirt with a customized message
