// ============================================================
// JavaScript Trainer Tasks - E-commerce Product Search
// Concepts: includes, indexOf, lastIndexOf
// ============================================================


// ============================================================
// SECTION 1 – includes() (Task 1)
// ============================================================

let products = ["laptop", "mobile", "tablet", "smartwatch", "mobile"];

// 1. Check if "tablet" exists in the product list
let hasTablet = products.includes("tablet");
console.log("Has tablet:", hasTablet); // true

// 2. Check if "camera" exists in the product list
let hasCamera = products.includes("camera");
console.log("Has camera:", hasCamera); // false


// ============================================================
// SECTION 2 – indexOf() (Task 3)
// ============================================================

// 3. Find the first index of "mobile"
let firstMobile = products.indexOf("mobile");
console.log("First index of mobile:", firstMobile); // 1


// ============================================================
// SECTION 3 – lastIndexOf() (Task 4)
// ============================================================

// 4. Find the last index of "mobile"
let lastMobile = products.lastIndexOf("mobile");
console.log("Last index of mobile:", lastMobile); // 4
