var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Barcelona", "Paris", "New York", "Sydney", "Manchester"];
console.log("Original Order:");
console.log(placesToVisit.join(", "));
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().join(", "));
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit.join(", "));
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse().join(", "));
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
console.log(placesToVisit.sort(function (a, b) { return b.localeCompare(a); }).join(", "));
