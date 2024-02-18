let usernames: string[] = ["admin", "Abdul", "Saboor", "Sohaib", "Rahim"];

usernames.forEach(username => {
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});