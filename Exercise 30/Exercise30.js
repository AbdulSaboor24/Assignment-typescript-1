var usernames = ["admin", "Abdul", "Saboor", "Sohaib", "Rahim"];
usernames.forEach(function (username) {
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
