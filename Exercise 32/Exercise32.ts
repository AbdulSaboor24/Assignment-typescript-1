let current_users: string[] = ["Abdul", "Alice", "Saboor", "David", "Charlie"];
let new_users: string[] = ["Alice", "Dave", "Frank", "John", "Mallory"];

new_users.forEach(new_user => {
    let usernameTaken = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    if (usernameTaken) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
});