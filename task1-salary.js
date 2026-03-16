// Task 1 - Employee Salary Analysis
let employees = [
  {name:"Ravi",  salary:25000},
  {name:"Meena", salary:60000},
  {name:"Arun",  salary:45000},
  {name:"Priya", salary:80000},
  {name:"John",  salary:30000}
];

// Q1: salary > 40000
let above40k = employees.filter(e => e.salary > 40000);
console.log("Above 40k:", above40k);

// Q2: first salary > 70000
let firstAbove70k = employees.find(e => e.salary > 70000);
console.log("First above 70k:", firstAbove70k);

// Q3: total salary
let total = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("Total salary:", total);

// Q4: any salary below 20000?
let anyBelow20k = employees.some(e => e.salary < 20000);
console.log("Any below 20k:", anyBelow20k);

// Q5: all salaries above 20000?
let allAbove20k = employees.every(e => e.salary > 20000);
console.log("All above 20k:", allAbove20k);
```
