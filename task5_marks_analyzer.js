// ============================================================
// JavaScript Trainer Tasks - Student Marks Analyzer
// Concepts: sort, reverse
// ============================================================


// ============================================================
// SECTION 1 – sort() Ascending (Task 1)
// ============================================================

let marks = [45, 90, 23, 67, 88, 12];

// 1. Sort marks in ascending order
let ascending = [...marks].sort((a, b) => a - b);
console.log("Ascending:", ascending); // [12, 23, 45, 67, 88, 90]


// ============================================================
// SECTION 2 – sort() Descending (Task 2)
// ============================================================

// 2. Sort marks in descending order
let descending = [...marks].sort((a, b) => b - a);
console.log("Descending:", descending); // [90, 88, 67, 45, 23, 12]


// ============================================================
// SECTION 3 – reverse() (Task 3)
// ============================================================

// 3. Reverse the marks array
let reversed = [...marks].reverse();
console.log("Reversed:", reversed); // [12, 88, 67, 23, 90, 45]
