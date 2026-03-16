// ============================================================
// JavaScript Trainer Tasks - Sports Data Slice
// Concepts: slice
// ============================================================


// ============================================================
// SECTION 1 – slice() Extract Middle (Task 1)
// ============================================================

let sports = ["cricket", "football", "tennis", "hockey", "golf"];

// 1. Extract football and tennis (index 1 to 3)
let middleSports = sports.slice(1, 3);
console.log("Football & Tennis:", middleSports); // ["football", "tennis"]


// ============================================================
// SECTION 2 – slice() Extract First (Task 2)
// ============================================================

// 2. Extract first 3 sports
let first3Sports = sports.slice(0, 3);
console.log("First 3 sports:", first3Sports); // ["cricket", "football", "tennis"]
