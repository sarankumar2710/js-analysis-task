// ============================================================
// JavaScript Trainer Tasks - Nested Array Data Cleanup
// Concepts: flat
// ============================================================


// ============================================================
// SECTION 1 – flat() (Task 1)
// ============================================================

let data = [1, 2, [3, 4, [5, 6]]];

// 1. Flatten the nested array completely using flat(Infinity)
let flatData = data.flat(Infinity);
console.log("Flattened:", flatData); // [1, 2, 3, 4, 5, 6]
