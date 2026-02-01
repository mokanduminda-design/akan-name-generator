const form = document.getElementById("nameForm");
const result = document.getElementById("result");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");

function calculateAkanName() {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const gender = maleInput.checked ? "male" : femaleInput.checked ? "female" : null;

    if (!day || !month || !year || !gender) {
        alert("Please fill in all fields and select your gender.");
        return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Invalid day or month.");
        return;
    }
