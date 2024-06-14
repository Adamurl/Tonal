// main.js

import { gregorianToAztec } from './aztec_calendar.js';

function convertDate() {
    const gregorianDate = new Date(document.getElementById('gregorian-date').value);
    const aztecDate = gregorianToAztec(gregorianDate);

    document.getElementById('aztec-date').innerHTML = 
        `Aztec Date: ${aztecDate.dayNumber} ${aztecDate.dayName}, ${aztecDate.month}`;
}

document.getElementById('gregorian-date').addEventListener('change', convertDate);
