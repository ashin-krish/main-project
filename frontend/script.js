document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email })
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("msg").innerText = data;
    })
    .catch(err => {
        document.getElementById("msg").innerText = "Server error!";
    });
});
