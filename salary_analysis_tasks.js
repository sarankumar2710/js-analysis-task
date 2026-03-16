// ============================================================
// JavaScript Trainer Tasks - Employee Salary Analysis
// Concepts: filter, find, reduce, some, every
// ============================================================


// ============================================================
// SECTION 1 – filter() (Tasks 1–2)
// ============================================================

let employees = [
  { name: "Ravi",  salary: 25000 },
  { name: "Meena", salary: 60000 },
  { name: "Arun",  salary: 45000 },
  { name: "Priya", salary: 80000 },
  { name: "John",  salary: 30000 }
];

// 1. Get employees whose salary is greater than 40000
let above40k = employees.filter(e => e.salary > 40000);
console.log("Above 40k:", above40k);
// [{ name: 'Meena', salary: 60000 }, { name: 'Arun', salary: 45000 }, { name: 'Priya', salary: 80000 }]

// 2. Get employees whose salary is less than or equal to 30000
let below30k = employees.filter(e => e.salary <= 30000);
console.log("Below or equal 30k:", below30k);
// [{ name: 'Ravi', salary: 25000 }, { name: 'John', salary: 30000 }]


// ============================================================
// SECTION 2 – find() (Task 3)
// ============================================================

// 3. Find the first employee whose salary is above 70000
let firstAbove70k = employees.find(e => e.salary > 70000);
console.log("First employee above 70000:", firstAbove70k);
// { name: 'Priya', salary: 80000 }


// ============================================================
// SECTION 3 – reduce() (Task 4)
// ============================================================

// 4. Calculate the total salary of all employees
let totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Salary:", totalSalary); // 240000


// ============================================================
// SECTION 4 – some() (Task 5)
// ============================================================

// 5. Check if any employee salary is below 20000
let anyBelow20k = employees.some(e => e.salary < 20000);
console.log("Any salary below 20000:", anyBelow20k); // false


// ============================================================
// SECTION 5 – every() (Task 6)
// ============================================================

// 6. Check if all employees salary are above 20000
let allAbove20k = employees.every(e => e.salary > 20000);
console.log("All salaries above 20000:", allAbove20k); // true
