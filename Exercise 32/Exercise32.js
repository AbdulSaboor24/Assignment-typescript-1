var current_users = ["Abdul", "Alice", "Saboor", "David", "Charlie"];
var new_users = ["Alice", "Dave", "Frank", "John", "Mallory"];
new_users.forEach(function (new_user) {
    var usernameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (usernameTaken) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
});
