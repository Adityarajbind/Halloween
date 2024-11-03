const pumkin = document.getElementById("pumkin")
const eyeColor = document.querySelector(".eye-color");


pumkin.addEventListener("mouseover", () => {
    eyeColor.style.backgroundColor = "#fffabb"; // Change color on hover
});

pumkin.addEventListener("mouseout", () => {
    eyeColor.style.backgroundColor = "#3a0436"; // Reset color when mouse leaves
});

window.addEventListener('load', () => {
    document.querySelector('.greeting').classList.add('visible');
    document.querySelector('.bat').classList.add('visible');
    document.querySelector('.zombie').classList.add('visible');
    document.querySelector('.pumkin').classList.add('visible');
    // document.body.style.overflow = 'auto'; 
    // Allow scrolling after animations
});
