function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Cazrath" && pass === "Ayesha") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Go back to homepage
    } else {
        document.getElementById("error").innerText = "Invalid username or password.";
    }
}

function checkLogin() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
