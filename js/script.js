let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.getElementById("menu-btn").addEventListener("click", function() {
    document.querySelector(".header .navbar").classList.toggle("active");
});

let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let message = document.getElementById("message").value.trim(); // Get message input
    let responseMessage = document.getElementById("responseMessage");

    if (!name || !email || !number || !message) {
        responseMessage.innerText = "Please fill in all fields.";
        responseMessage.style.color = "red";
        return;
    }

    emailjs.send("closedSky", "closedSky", {
        name: name, 
        email: email, 
        number: number, 
        message: message // Send user message
    }).then(function(response) {
        responseMessage.innerText = "შენი მონაცემები წარმატებით გაიგზავნა!";
        responseMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    }, function(error) {
        responseMessage.innerText = "შენი მონაცემები ვერ გაიგზავნა, სცადე ხელახლა.";
        responseMessage.style.color = "red";
    });
});
