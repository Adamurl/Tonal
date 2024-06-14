// aztec_calendar.js

// Day and month names in the Aztec calendar
const dayNames = ["Cipactli", "Ehecatl", "Calli", "Cuetzpallin", "Coatl", "Miquiztli", "Mazatl", "Tochtli", "Atl", "Itzcuintli", "Ozomahtli", "Malinalli", "Acatl", "Ocelotl", "Cuauhtli", "Cozcacuauhtli", "Ollin", "Tecpatl", "Quiahuitl", "Xochitl"];
const monthNames = ["Atlacahualo", "Tlacaxipehualiztli", "Tozoztontli", "Hueytozoztli", "Toxcatl", "Etzalcualiztli", "Tecuilhuitontli", "Hueytecuilhuitl", "Tlaxochimaco", "Xocotlhuetzi", "Ochpaniztli", "Teotleco", "Tepeilhuitl", "Quecholli", "Panquetzaliztli", "Atemoztli", "Tititl", "Izcalli", "Nemontemi"];

// Function to convert Gregorian date to Aztec calendar date
function gregorianToAztec(gregorianDate) {
    // Reference date (example: March 6, 2021)
    const referenceDate = new Date('2021-03-06');
    const referenceAztecDayNumber = 10; // Ozomahtli
    const referenceAztecMonth = "Nemontemi";

    // Calculate the difference in days between the input date and the reference date
    const dayDifference = Math.floor((gregorianDate - referenceDate) / (1000 * 60 * 60 * 24));

    // Calculate the new day number
    let aztecDayNumber = (referenceAztecDayNumber + dayDifference) % 13;
    if (aztecDayNumber <= 0) aztecDayNumber += 13;

    // Calculate the new day name
    let dayIndex = (dayNames.indexOf(referenceAztecMonth) + dayDifference) % 20;
    if (dayIndex < 0) dayIndex += 20;
    const aztecDayName = dayNames[dayIndex];

    // Calculate the new month name and day count within the month
    const aztecMonthIndex = Math.floor(dayDifference / 20);
    const aztecMonth = monthNames[aztecMonthIndex % 19];

    return {
        dayNumber: aztecDayNumber,
        dayName: aztecDayName,
        month: aztecMonth
    };
}

// Export functions for use in other files
export { gregorianToAztec };
