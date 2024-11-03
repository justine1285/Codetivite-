'use strict';

const hourHand = document.querySelector('.hourHand');
const secondHand = document.querySelector('.secondHand');
const minHand = document.querySelector('.minHand');
const clockTime = document.querySelector('.clock-time');
const clockFace = document.querySelector('.clock-face');
const clock = document.querySelector('.clock');
const hands = document.querySelectorAll('.hand');
const timeText = document.querySelectorAll('.time');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();

//task 1 

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.mins').textContent = minutes;
    document.querySelector('.secs').textContent = seconds;
  };

setInterval(updateTime, 1000);
updateTime();

// Task 2 show time on hover
clock.addEventListener('mouseenter', () => {
    clockTime.style.display = 'block';
    clockTime.style.opacity = '1';
});

clockFace.addEventListener('mouseleave', () => {
    clockTime.style.opacity = '0';
    clockTime.style.display = 'none';
});

////////////////////////////////////
// task 3, 4, 5, 6
const colors = ['Red', 'green', 'black', 'blue', 'yellow', 'purple', 'pink'];
let colorIndex = 0;

const backgroundColors = ['blue', 'yellow', 'white', 'pink', 'purple', 'Red', 'green'];
let backgroundIndex = 0;

const handColors = ['Red', 'green', 'black', 'blue', 'yellow', 'purple', 'pink'];
let handColorIndex = 0;

const timeTextColors = ['blue', 'yellow', 'white', 'pink', 'purple', 'Red', 'green'];
let timeTextColorIndex = 0;

// Task 3 function to change color of the frame
function changeFrameColor() {
    clock.style.borderColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// Task 4 function to chnage color of the clock's background
function changeBackgroundColor () {
    clock.style.backgroundColor = backgroundColors[backgroundIndex];
    backgroundIndex = (backgroundIndex + 1) % backgroundColors.length;
}

// Task 5 function to change color of the clock hand
function changeHandColor() {
    hands.forEach(hand => {
        hand.style.backgroundColor = handColors[handColorIndex];
    });
    handColorIndex = (handColorIndex + 1) % handColors.length;
}

// Task 6 fuction to change color of the time
function changeTimeColor() {
    timeText.forEach(timeText => {
        timeText.style.color = timeTextColors[timeTextColorIndex];
    });
    timeTextColorIndex = (timeTextColorIndex + 1) % timeTextColors.length;
}

clock.addEventListener('click', function () {
    //Task 3 change clock color
    changeFrameColor();

    // Task 4 change clock background color
    changeBackgroundColor();

    // Task 5 change color of the clock hand
    changeHandColor();

    // Task 6 change color of the time Text
    changeTimeColor();
});

