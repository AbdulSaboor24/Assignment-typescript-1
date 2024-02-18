let guestList: string[] = ["Zia Khan", "Daniyal Nagori", "Ameen Alam"];

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n`);
});

const unableToAttend = "Daniyal Nagori";
console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.\n`);

const newInvitee = "Okasha";

const index = guestList.indexOf(unableToAttend);
if (index !== -1) {
    guestList[index] = newInvitee;
}

console.log("Great news! I found a bigger dinner table!\n");

guestList.unshift("Kamran Tessori");

guestList.splice(Math.floor(guestList.length / 2), 0, "Fahad Khan");

guestList.push("Hira Khan");

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n`);
});
