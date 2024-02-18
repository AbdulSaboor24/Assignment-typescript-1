let guestList: string[] = ["Zia Khan", "Daniyal Nagori", "Ameen Alam"];
let Host: string = "Abdul Saboor";

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to have dinner at my place.\n\nSincerely.\n${Host}\n\n`);
});