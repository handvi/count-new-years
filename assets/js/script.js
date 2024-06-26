const images = [
    'url(https://source.unsplash.com/random/1920x1080?nature)',
    'url(https://source.unsplash.com/random/1920x1080?city)',
    'url(https://source.unsplash.com/random/1920x1080?space)',
    'url(https://source.unsplash.com/random/1920x1080?ocean)',
    'url(https://source.unsplash.com/random/1920x1080?forest)'
    'url(https://source.unsplash.com/random/1920x1080?technology)'
];

document.body.style.backgroundImage = images[Math.floor(Math.random() * images.length)];

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDifference = newYear - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
