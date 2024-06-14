// main.js

const { gregorianToTonalpohualli, gregorianToXiuhpohualli } = require('./aztec_calendar');

function convertDate() {
    const gregorianDate = new Date(document.getElementById('gregorian-date').value);
    const tonalpohualliDate = gregorianToTonalpohualli(gregorianDate);
    const xiuhpohualliDate = gregorianToXiuhpohualli(gregorianDate);

    document.getElementById('tonalpohualli-date').innerHTML = 
        `Tonalpohualli: ${tonalpohualliDate.day} ${tonalpohualliDate.name}`;
    document.getElementById('xiuhpohualli-date').innerHTML = 
        `Xiuhpohualli: ${xiuhpohualliDate.month} ${xiuhpohualliDate.day}`;
}

document.getElementById('gregorian-date').addEventListener('change', convertDate);
