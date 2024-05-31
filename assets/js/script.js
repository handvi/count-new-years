function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = now.getMonth() === 11 && now.getDate() > 31 ? currentYear + 1 : currentYear;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDifference = newYear - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s `;
    } else {
        document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
}

setInterval(updateCountdown, 1000);