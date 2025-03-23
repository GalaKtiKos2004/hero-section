// Анимация для кнопки "Book Appointment"
const bookBtn = document.querySelector('.book-btn');
bookBtn.addEventListener('click', () => {
    bookBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        bookBtn.style.transform = 'scale(1)';
    }, 200);
    alert('Appointment booked! Meow! 🐾');
});

// Анимация для кнопки воспроизведения
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    playButton.style.backgroundColor = '#ff7a3d';
    setTimeout(() => {
        playButton.style.backgroundColor = '#ffc039';
    }, 300);
    alert('Playing a cute cat video! 🎥');
});

// Анимация для точек
const dots = document.querySelectorAll('.dot');
let activeDotIndex = 0;

setInterval(() => {
    dots[activeDotIndex].classList.remove('active');
    activeDotIndex = (activeDotIndex + 1) % dots.length;
    dots[activeDotIndex].classList.add('active');
}, 3000);

// Анимация для кнопок услуг
const serviceButtons = document.querySelectorAll('.service-item');
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        alert(`You selected: ${button.querySelector('span').textContent}`);
    });
});