// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Navbar is loaded and ready!");
});

document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
    // Show the toggle element after 3 seconds
    setTimeout(() => {
        const audioToggle = document.getElementById('audio-toggle');
        audioToggle.classList.remove('hidden');
        audioToggle.style.display = 'block';
    }, 3000);
});

// Function to play audio and hide toggle
function playAudio() {
    const audioToggle = document.getElementById('audio-toggle');
    const backgroundAudio = document.getElementById('background-audio');

    // Hide the toggle and play the audio
    audioToggle.style.display = 'none';
    backgroundAudio.play();
}

// Function to close the toggle without playing audio
function closeToggle() {
    const audioToggle = document.getElementById('audio-toggle');
    audioToggle.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Show notification after 7-9 seconds randomly
    const delay = Math.floor(Math.random() * 3000) + 7000;
    setTimeout(() => {
        const notification = document.getElementById('audio-notification');
        notification.classList.remove('hidden');
        notification.style.display = 'block';
    }, delay);
});

// Play Audio
function playAudio() {
    const notification = document.getElementById('audio-notification');
    const audio = document.getElementById('background-audio');
    notification.style.display = 'none';
    audio.play();
}

// Close Notification
function closeNotification() {
    const notification = document.getElementById('audio-notification');
    notification.style.display = 'none';
}

// Mute, Play, and Resume Buttons in Toggle Options
document.getElementById('mute-audio').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.pause();
});

document.getElementById('play-audio').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.play();
});

document.getElementById('resume-audio').addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
    }
});
