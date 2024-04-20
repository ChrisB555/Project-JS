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
const reload = document.querySelector("#reload");

let burger = document.querySelector("#burger");
let closeButton = document.querySelector("#close");
let responsiveDrop = document.querySelector("#responsive-drop");

let modal = document.querySelector("#modal");
let filme;
let idFilm;

const getMovies = async () => {
  const filmeLocal = await fetch("http://localhost:3001/filme/").then(
    (response) => response.json()
  );
  return filmeLocal;
};

//am schimbat unele id-uri in clase pentru a putea folosi proprietatea "classList" - in concluzie am actualizat si legatura noilor clase cu css
const main = async () => {
  const date = await getMovies();
  filme = date;
  date.forEach((element) => {
    let p = `<a id = "lista-filme" target="_blank">
         <img class="main-img"src=${element.photo}/>
         <div class="idul">${element.id}</div> 
         <h3 class="h3">${element.name}</h3>
         <button class="editBtn" onclick="redirect()">Edit</button>
         <button class="deleteBtn" onclick="deleteMovie()" >Delete</button>
         </a>`;
    list.innerHTML += p;
  });
};

//functie asincrona care asteapta incarcarea list.innerHTML (altfel EventListener-ul iti da null) - adica se executa dupa main()
const listen = async () => {
  await main();

  //dupa main initializam si cautam cu EventListener in tot body-ul pentru un click event - aici se identifica idul pentru DELETE - dar se mai poate introduce in continuare un IF si pt EDIT (editBtn)
  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      idFilm = event.target.parentNode.children[1].textContent;
      console.log("continutul dorit", event, idFilm);
      return idFilm;
    }
    if (event.target.classList.contains("editBtn")) {
      idFilm = event.target.parentNode.children[1].textContent;
      console.log("continutul dorit", event, idFilm);
      localStorage.setItem("idFilm", idFilm);
    }
  });
};

// setTimeout(function () {
//   window.location.reload();
// }, 5000);

//apelam functia listen care contine si main()!!!
listen();

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
        <h1>${film.name}</h1> 
        <h3>Director:${film.director}   Year:${film.year}</h3> 
        <p id="display-p">Description :${film.description} </p>
        </div>`;
  }
  list.style.display = "none";
};

reset.addEventListener("click", () => {
  location.href = "edit.html";
});

const redirect = () => {
  location.href = "../Edit form/editForm.html";
};

const deleteMovie = () => {
  modal.style.display = "block";
};

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});

const deleteConfirmed = async () => {
  console.log("idFilm =", idFilm);
  await fetch(`http://localhost:3001/filme/${idFilm}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

deleteModal.addEventListener("click", () => {
  modal.style.display = "none";
  //am scris separat functia de deleteConfirmed pentru a putea face un reload la pagina imediat dupa - altfel nu permite sintaxa javascript sa scrii nimic dupa fetch
  deleteConfirmed();

  //face reload la pagina ca sa dispara filmul sters

  setTimeout(function () {
    window.location.reload();
  }, 1000);
});

dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});

//responsive nav
burger.addEventListener("click", () => {
  responsiveDrop.style.display = "block";
  closeButton.style.display = "block";
  burger.style.display = "none";
});

closeButton.addEventListener("click", () => {
  responsiveDrop.style.display = "none";
  closeButton.style.display = "none";
  burger.style.display = "block";
});
