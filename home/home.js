const dark = document.querySelector(".dark");
let nav =document.querySelector("#nav");
let footer =document.querySelector("#footer");
let burger =document.querySelector("#burger");
let closeBtn =document.querySelector("#close");
let responsiveDrop =document.querySelector("#responsive-drop");
let filme;

const getMovies = async () => {
    const filmeLocal = await fetch("http://localhost:3001/filme/")
    .then((response) => response.json())
    return filmeLocal;
};

burger.addEventListener("click", () => {
    responsiveDrop.style.display = "block";
    closeBtn.style.display = "block";
    burger.style.display = "none";
})

closeBtn.addEventListener("click", () => {
    responsiveDrop.style.display = "none";
    closeBtn.style.display = "none";
    burger.style.display = "block";
})

dark.addEventListener("click", () => {
    let b = document.body;
    b.classList.toggle("dark-mode");
})



