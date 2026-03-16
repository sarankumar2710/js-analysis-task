// ============================================================
// JavaScript Trainer Tasks - Website Username Formatter
// Concepts: trim, toUpperCase, toLowerCase, slice
// ============================================================


// ============================================================
// SECTION 1 – trim() (Task 1)
// ============================================================

let username = "   naveenkumar   ";

// 1. Remove extra spaces from username
let trimmed = username.trim();
console.log("Trimmed:", trimmed); // naveenkumar


// ============================================================
// SECTION 2 – toUpperCase() (Task 2)
// ============================================================

// 2. Convert the username to uppercase
let upper = trimmed.toUpperCase();
console.log("Uppercase:", upper); // NAVEENKUMAR


// ============================================================
// SECTION 3 – toLowerCase() (Task 3)
// ============================================================

// 3. Convert the username to lowercase
let lower = trimmed.toLowerCase();
console.log("Lowercase:", lower); // naveenkumar


// ============================================================
// SECTION 4 – slice() (Task 4)
// ============================================================

// 4. Extract only first 6 characters of the username
let first6 = trimmed.slice(0, 6);
console.log("First 6 chars:", first6); // naveen
