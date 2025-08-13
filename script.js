// Select elements
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.menu-dropdown');

// Toggle dropdown on click
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicking outside
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});
