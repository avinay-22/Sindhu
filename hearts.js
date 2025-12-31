const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    heart.style.fontSize = (14 + Math.random() * 20) + 'px';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

function showMsg() {
    const msg = document.getElementById("message");
    msg.style.display = "inline-block";

    createHeartBurst();
}
function createHeartBurst() {
    const container = document.querySelector('.burst-hearts');
    const button = document.querySelector('.btn-3d');
    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 16; i++) {

        // 💖 HEART
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        heart.innerHTML = '💖';

        // ✨ SPARKLE
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';

        const angle = Math.random() * 2 * Math.PI;
        const distance = 70 + Math.random() * 60;

        [heart, sparkle].forEach(el => {
            el.style.left = centerX + 'px';
            el.style.top = centerY + 'px';
            el.style.setProperty('--x', Math.cos(angle) * distance + 'px');
            el.style.setProperty('--y', Math.sin(angle) * distance + 'px');
            container.appendChild(el);

            setTimeout(() => el.remove(), 1200);
        });
    }
}
function showMsg() {
    const msg = document.getElementById("message");
    msg.style.display = "inline-block";
    createHeartBurst();
}




