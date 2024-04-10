const dark = document.querySelector(".dark");
let nav =document.querySelector("#nav");
let footer =document.querySelector("#footer");
let filme;

const getMovies = async () => {
    const filmeLocal = await fetch("http://localhost:3001/filme/")
    .then((response) => response.json())
    return filmeLocal;
};


dark.addEventListener("click", () => {
    let b = document.body;
    b.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
})



