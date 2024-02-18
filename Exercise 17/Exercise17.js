var guestList = ["Zia Khan", "Ameen Alam", "Kamran Tessori", "Okasha", "Fahad Khan", "Hira Khan"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely,\nAbdul Saboor\n\n"));
});
console.log("Unfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.\n\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are still invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n"));
});
guestList.pop();
guestList.pop();
