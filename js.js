// Function to get the current day of the week

function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time in HH:MM AM/PM format
function getCurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm} UTC`;
}

// Updating the HTML elements with dynamic data
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();