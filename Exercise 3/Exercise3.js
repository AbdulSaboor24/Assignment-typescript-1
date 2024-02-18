var Name = "Abdul Saboor";
// Lower Case Name
var LowercaseName = Name.toLowerCase();
console.log(LowercaseName);
// Upper Case Name
var UppercaseName = Name.toUpperCase();
console.log(UppercaseName);
// Title Case
var titleCaseName = Name
    .toLowerCase()
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log("".concat(titleCaseName));
