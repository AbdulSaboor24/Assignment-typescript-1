var guestList = ["Zia Khan", "Daniyal Nagori", "Ameen Alam"];
var Host = "Abdul Saboor";
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to have dinner at my place.\n\nSincerely.\n").concat(Host, "\n\n"));
});
