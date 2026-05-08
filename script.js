// 1. Form pakdo
let form = document.getElementById("form");

// 2. Message element pakdo  
let msg = document.getElementById("form-msg");

// 3. Submit event suno
form.addEventListener("submit", function(e) {
    
    // 4. Default submit rokho
    e.preventDefault();

    // 5. Values lo
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // 6. Check karo
    if (name === "" || email === "" || message === "") {
        msg.innerHTML = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Message sent successfully!";
        msg.style.color = "green";
        form.reset(); // form saaf karo
    }
});
