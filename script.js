// script.js

function toggleLogin() {
    const dropdown = document.getElementById("loginDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Optional: Hide dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.closest('.login-container')) {
        document.getElementById("loginDropdown").style.display = "none";
    }
}
