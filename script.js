// 1. Form pakdo
let form = document.getElementById("form");

// 2. Message element pakdo
let msg = document.getElementById("form-msg");

// 3. Submit event suno
form.addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        msg.innerHTML = "Please fill all fields!";
        msg.style.color = "red";
    }
});
