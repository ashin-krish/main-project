document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;   

    fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("msg").innerText = data;

       
        document.getElementById("contactForm").reset();
    })
    .catch(err => {
        document.getElementById("msg").innerText = "Server error!";
    });
});
