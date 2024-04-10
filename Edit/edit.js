const dark = document.querySelector(".dark");
const searchBar = document.querySelector("#searchBar");
const list = document.querySelector("#list");
const listDisplay = document.querySelector("#list-display");
const error = document.querySelector("#error");
const editBtn = document.querySelector("#editBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const closeBtn = document.querySelector(".close");
const deleteModal = document.querySelector("#delete");
const cancel = document.querySelector("#cancel");
const reset = document.querySelector("#reset");

let modal = document.querySelector("#modal");
let filme;
let idFilm = 0;


const getMovies = async () => {
  const filmeLocal = await fetch("http://localhost:3001/filme/").then(
    (response) => response.json()
  );
  return filmeLocal;
};

const main = async () => {
  const date = await getMovies();
  filme = date;
  date.forEach((element) => {
    let p = `<a id = "lista-filme" target="_blank">
         <img class="main-img"src=${element.photo}/> 
         <h3 id="h4">${element.filmName}</h3> 
         <button id="editBtn" onclick="redirect()">Edit</button>
         <button id="deleteBtn" onclick="deleteMovie()" >Delete</button>
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
      filme.filter((film) => {
        error.innerHTML = "";
        listDisplay.innerHTML = "";
        return film.filmName.toLowerCase().includes(searchMovie);
      })
    );
  } else if (isNaN(searchMovie)) {
    error.innerHTML = "Sorry!There is no movie with that name";
    listDisplay.innerHTML = "";
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
  location.href = "file:///C:/IT/Proiect%20JS/Edit/edit.html";
})

const redirect = () => {
  location.href = "file:///C:/IT/Proiect%20JS/Edit%20form/editForm.html";
};


const deleteMovie = () => {
  modal.style.display = "block";
};

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});

deleteModal.addEventListener("click", () => {
  modal.style.display = "none";
  fetch(`http://localhost:3001/filme/${idFilm}`, {
    method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
});

dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});
