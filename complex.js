let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 1850, 2500);
    counter("count3", 0, 1400, 3000);
    counter("count4", 0, 4110, 3000);
});

console.log("rock");

let contact = document.getElementById("number");
contact.addEventListener("click", function () {
    alert("thanks for contact me");
});

document.getElementById("like").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

let login = document.querySelector(".login-button");
login.addEventListener("click", function () {
    alert("thanks for order .You will receive your order on time");
});
