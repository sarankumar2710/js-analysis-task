// ============================================================
// JavaScript Trainer Tasks - Game Platform Data Processing
// Concepts: forEach, map
// ============================================================


// ============================================================
// SECTION 1 – forEach() (Task 1)
// ============================================================

let games = ["cricket", "football", "hockey", "tennis"];

// 1. Print all games using forEach()
console.log("All games:");
games.forEach(game => console.log(game));
// cricket
// football
// hockey
// tennis


// ============================================================
// SECTION 2 – map() (Task 2)
// ============================================================

// 2. Create a new array with "Game : " prefix using map()
let formattedGames = games.map(game => "Game : " + game);
console.log("Formatted games:", formattedGames);
// ["Game : cricket", "Game : football", "Game : hockey", "Game : tennis"]
