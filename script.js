function updateClock() {
    const clock = new Date();

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = clock.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('time').textContent = timeString;

    const dateOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    const dateString = clock.toLocaleDateString('en-GB', dateOptions);
    document.getElementById('date').textContent = dateString;

    const dayOptions = { weekday: 'long' };
    const dayString = clock.toLocaleDateString('en-US', dayOptions);
    document.getElementById('day').textContent = dayString;
}

updateClock();

setInterval(updateClock, 1000);