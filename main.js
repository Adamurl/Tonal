// main.js

import { gregorianToAztec } from './aztec_calendar.js';

function convertDate() {
    const gregorianDateInput = document.getElementById('gregorian-date').value;

    // Check if the input date is valid
    if (!gregorianDateInput) {
        document.getElementById('aztec-date').innerHTML = 'Please select a valid date.';
        return;
    }

    const gregorianDate = new Date(gregorianDateInput);

    // Check if the date is a valid Gregorian date
    if (isNaN(gregorianDate.getTime())) {
        document.getElementById('aztec-date').innerHTML = 'Invalid Gregorian date. Please select a valid date.';
        return;
    }

    try {
        const aztecDate = gregorianToAztec(gregorianDate);

        document.getElementById('aztec-date').innerHTML = 
            `Aztec Date: ${aztecDate.dayNumber} ${aztecDate.dayName}, ${aztecDate.month}`;
    } catch (error) {
        document.getElementById('aztec-date').innerHTML = 'An error occurred while converting the date.';
        console.error('Error converting date:', error);
    }
}

document.getElementById('convert-button').addEventListener('click', convertDate);
