let form = document.getElementById("form");
let msg = document.getElementById("form-msg");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        msg.innerHTML = "Please fill all fields!";
        msg.style.color = "red";
        return;
    }

    let data = {
        name: name,
        email: email,
        message: message
    };

    try {
        let response = await fetch("https://formspree.io/f/xeenrrwq", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            msg.innerHTML = "Message sent successfully ✅";
            msg.style.color = "lime";

            form.reset();
        } else {
            msg.innerHTML = "Something went wrong ❌";
            msg.style.color = "red";
        }

    } catch (error) {
        msg.innerHTML = "Network error ❌";
        msg.style.color = "red";
    }
});
