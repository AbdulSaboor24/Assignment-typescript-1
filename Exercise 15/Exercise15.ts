let guestList: string[] = ["Zia Khan", "Daniyal Nagori", "Ameen Alam"];

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n`);
});

const unableToAttend = "Daniyal Nagori";
console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.\n`);

const newInvite = "Okasha";

const index = guestList.indexOf(unableToAttend);
if (index !== -1) {
    guestList[index] = newInvite;
}

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n`);
});
