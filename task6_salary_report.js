// ============================================================
// JavaScript Trainer Tasks - Salary Report Generator
// Concepts: reduce
// ============================================================


// ============================================================
// SECTION 1 – reduce() Total (Task 1)
// ============================================================

let salaries = [10000, 20000, 30000, 40000];

// 1. Find total salary paid by company
let total = salaries.reduce((sum, s) => sum + s, 0);
console.log("Total Salary:", total); // 100000


// ============================================================
// SECTION 2 – reduce() Average (Task 2)
// ============================================================

// 2. Find average salary
let average = total / salaries.length;
console.log("Average Salary:", average); // 25000
