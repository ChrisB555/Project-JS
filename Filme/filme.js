const dark = document.querySelector(".dark");
const searchBar = document.querySelector("#searchBar");
const list = document.querySelector("#list");
const listDisplay = document.querySelector("#list-display");
const error = document.querySelector("#error");
const reset = document.querySelector("#reset");

let filme,found;
let searchMovie = "";

const getMovies = async () => {
  const filmeLocal = await fetch("http://localhost:3001/filme/")
  .then((response) => response.json());
  return filmeLocal;
};

const main = async () => {
  const date = await getMovies();
  filme = date;
  date.forEach((element) => {
    let p = `<a id = "lista-filme" target="_blank">
       <img class="main-img"src=${element.photo}/> 
       <h3 id="h4">${element.filmName}</h3> 
       <h5>Director: ${element.director}</h5> 
       <h5>Release year: ${element.year}</h5> 
       <h5>Ratings: ${element.rating} 
       <i id="star" class="ri-star-fill"></i>
       <i id="star" class="ri-star-fill"></i>
       <i id="star" class="ri-star-fill"></i>
       <i id="star" class="ri-star-fill"></i>
       <i id="star" class="ri-star-fill"></i></h5>
       </a>`;
    list.innerHTML += p;
  });
};

main();

searchBar.addEventListener("change", (e) => {
  searchMovie = e.target.value;
  if (searchMovie) {
    searchMovie = searchMovie.trim();
    displayMovie(
     found = filme.filter((film) => {
        error.innerHTML = "";
        listDisplay.innerHTML = "";
        return film.filmName.toLowerCase().includes(searchMovie);
      })
    );
  }else {
    error.innerHTML = "Sorry!There is no movie with that name";   
  };
   if (found.length !== 0) {
    displayMovie(found)
  } else {
    error.innerHTML = "Sorry!There is no movie with that name";
    listDisplay.innerHTML = "";
  }
});

const displayMovie = (movie) => {
  for (let film of movie) {
    listDisplay.innerHTML = `<div id = "display-filme" target="_blank">
        <img class="display-img" src=${film.photo}/> 
        <h1>${film.filmName}</h1> 
        <h3>Director:${film.director}   Year:${film.year}</h3> 
        <p id="display-p">Description :${film.description} </p>
        </div>`;
  }
  list.style.display = "none";
};

reset.addEventListener("click", () => {
  location.href = "file:///C:/IT/Proiect%20JS/Filme/filme.html";
})

dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});
