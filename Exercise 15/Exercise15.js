var guestList = ["Zia Khan", "Daniyal Nagori", "Ameen Alam"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n"));
});
var unableToAttend = "Daniyal Nagori";
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to the dinner.\n"));
var newInvite = "Okasha";
var index = guestList.indexOf(unableToAttend);
if (index !== -1) {
    guestList[index] = newInvite;
}
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to have dinner at my place.\n\nSincerely,\nAbdul Saboor\n\n"));
});
