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

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

   let d = Math.floor((CC/4 - 2*CC - 1) + (5*YY/4) + (26*(MM + 1)/10) + DD) % 7+1

   
    const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
    const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const dayName = days[d];
    let akanName;

    if (gender === "male") {
        akanName = maleNames[d];
    } else if (gender === "female") {
        akanName = femaleNames[d];
    }

    result.textContent = `You were born on ${dayName}. Your Akan name is ${akanName}.`;
}


[dayInput, monthInput, yearInput].forEach(input => {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calculateAkanName();
        }
    });
});