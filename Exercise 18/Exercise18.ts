let placesToVisit: string[] = ["Barcelona", "Paris", "New York", "Sydney", "Manchester"];

console.log("Original Order:");
console.log(placesToVisit.join(", "));

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort().join(", "));

console.log("\nOriginal Order (still intact):");
console.log(placesToVisit.join(", "));

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse().join(", "));

console.log("\nOriginal Order (still intact):");
console.log(placesToVisit.join(", "));

console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));

console.log("\nReversed Order (back to original):");
placesToVisit.reverse();
console.log(placesToVisit.join(", "));

console.log("\nSorted Alphabetically:");
console.log(placesToVisit.sort().join(", "));

console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort((a, b) => b.localeCompare(a)).join(", "));
