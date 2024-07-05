document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeUTC.textContent = utcTime;
        currentDay.textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

