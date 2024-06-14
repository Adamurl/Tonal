// aztec_calendar.js

// Function to convert Gregorian date to Aztec Tonalpohualli date
function gregorianToTonalpohualli(date) {
    const startDate = new Date('2023-02-23'); // Example reference date
    const dayNumber = Math.floor((date - startDate) / (1000 * 60 * 60 * 24)) % 260;
    const dayNames = ["Cipactli", "Ehecatl", "Calli", "Cuetzpallin", "Coatl", "Miquiztli", "Mazatl", "Tochtli", "Atl", "Itzcuintli", "Ozomahtli", "Malinalli", "Acatl", "Ocelotl", "Cuauhtli", "Cozcacuauhtli", "Ollin", "Tecpatl", "Quiahuitl", "Xochitl"];
    const dayNumberNames = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"];
    
    return {
        day: dayNumberNames[dayNumber % 13],
        name: dayNames[dayNumber % 20]
    };
}

// Function to convert Gregorian date to Aztec Xiuhpohualli date
function gregorianToXiuhpohualli(date) {
    const startDate = new Date('2023-02-23'); // Example reference date
    const dayNumber = Math.floor((date - startDate) / (1000 * 60 * 60 * 24)) % 365;
    const monthNames = ["Cuauhtli", "Coatl", "Malinalli", "Acatl", "Ocelotl", "Cuauhtli", "Cozcacuauhtli", "Ollin", "Tecpatl", "Quiahuitl", "Xochitl", "Cipactli", "Ehecatl", "Calli", "Cuetzpallin", "Mazatl", "Tochtli", "Atl", "Itzcuintli", "Ozomahtli"];
    
    return {
        month: monthNames[Math.floor(dayNumber / 20)],
        day: dayNumber % 20 + 1
    };
}

// Export functions for use in other files
module.exports = { gregorianToTonalpohualli, gregorianToXiuhpohualli };
