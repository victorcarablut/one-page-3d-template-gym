const hamburgerMenu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const linkMenu = document.querySelector(".links");
const floatAction = document.querySelector(".float-action");

// Menu (Navbar)
hamburgerMenu.addEventListener("click", () => {
    container.classList.toggle("active");
})

linkMenu.addEventListener("click", () => {
    container.classList.toggle("active");
})

floatAction.addEventListener("click", () => {
    floatAction.classList.toggle("active-flt-action");
})


// Card (Products)
const card = document.querySelectorAll(".card").forEach((eachCard) => {

    document.querySelectorAll(".product-info").forEach((eachProductInfo) => {

        eachCard.addEventListener("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 15;
        let y = (window.innerHeight / 2 - e.pageY) / 15;
        eachCard.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    })
    
    eachProductInfo.addEventListener("mouseenter", () => {
        eachProductInfo.style.transform = "translateZ(40px)";
    })
    
    eachCard.addEventListener("mouseleave", () => {
        eachProductInfo.style.transform = "translateZ(0px)";
        eachCard.style.transform = ` rotateX(0deg) rotateY(0deg)`;
    })

    });

});

// Current Date (Year)
document.getElementById("Year").innerHTML = new Date().getFullYear();