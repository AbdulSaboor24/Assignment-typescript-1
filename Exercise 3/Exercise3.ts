let Name: string = "Abdul Saboor"

// Lower Case Name
let LowercaseName: string = Name.toLowerCase();

console.log(LowercaseName);

// Upper Case Name
let UppercaseName: string = Name.toUpperCase();

console.log(UppercaseName);

// Title Case

const titleCaseName = Name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(`${titleCaseName}`)