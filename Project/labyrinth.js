'use strict';

// Task one
const labyrinth = [
    ["W", "E", "W", "W", "W"],
    ["W", "P", "P", "P", "W"],
    ["W", "W", "W", "P", "W"],
    ["W", "P", "P", "P", "T"],
    ["W", "W", "W", "W", "W"], 
];

// W for wall, P for path, E for entrance, T for treasure

// Task two
function move(direction) {
    const {x, y} = adventurerPosition;
    let newPosition = {x , y};
    
    switch (direction) {
        case "up": newPosition.x -= 1; break; // move up
        case "down": newPosition.x += 1; break; // move down
        case "left": newPosition.y -= 1; break; // move left
        case "right": newPosition.y += 1; break; // move right
    }

    // check if the move is valid
    if (labyrinth[newPosition.x] && labyrinth[newPosition.x][newPosition.y] === "P") {
        adventurerPosition = newPosition;
        recordMove(adventurerPosition);
    } else {
        console.log("Hit a wall! Adjusting corse.");
    }
}

// Task 3
let movementRecord = [];

function recordMove(position) {
    movementRecord.push({x: position.x, y: position.y});
}

// Task 4
function Treasure() {
    const {x, y} = adventurerPosition;
    if (labyrinth[x][y] === "T") {
        console.log("🥳Treasure found! Congratulations!!!🥳");
        return true;
    }
    return false;
}

//Task 5
function returnToSafety() {
    console.log("Retracing steps to safety...");
    for (let i = movementRecord.length - 1; i >= 0; i--) {
      const { x, y } = movementRecord[i];
      console.log(`Returning to: (${x}, ${y})`);
    }
  };

// Task 6
function displayLabyrinth() {
    console.log("Labyrinth:");
    labyrinth.forEach((row, rowIndex) => {
        console.log(
            row.map((cell, colIndex) =>
            adventurerPosition.x === roeIndex && adventurerPosition.y === colIndex ? "A" : cell).join(" ")
        );
    });
}

// Task 7
function victoryMessage() {
    console.log("🎉 The adventurer has successfully found the treasure 🎉");
}

// Main function to start the adventure
function startAdventure() {
    const directions = ['right', 'down', 'left', 'up']; 
  
    for (const direction of directions) {
      move(direction);
      displayLabyrinth();
      if (checkForTreasure()) {
        victoryMessage();
        return;
      }
    }
    returnToSafety();
  }
  
  startAdventure();