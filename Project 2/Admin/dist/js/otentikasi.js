document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin123@gmail.com" && password === "12345") {
        window.location.href = "transaksi.html";
    } else {
        alert("Login gagal");
    }
});