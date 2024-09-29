const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


const contactForm = document.getElementById("contact-form")
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
    loader.style.display = "block";
    e.preventDefault();
    
    const url = e.target.action; 
    const formData = new FormData(contactForm)

    fetch(url, {
        method: "POST", 
        body: formData, 
        mode: "no-cors",
    })
    .then(() => {
        //url page thanks you
        loader.style.display = "none";
        window.location.href = "/thankyou.html"
    })
    .catch((e) => alert("Eror page form"))
})


