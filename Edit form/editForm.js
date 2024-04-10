const movieName = document.querySelector("#name");
const movieDirector = document.querySelector("#director");
const rating = document.querySelector("#rating");
const linkImg = document.querySelector("#linkImg");
const linkVideo = document.querySelector("#linkVideo");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const errorName = document.querySelector("#div-one-error");
const errorDirector = document.querySelector("#div-two-error");
const errorRating = document.querySelector("#div-three-error");
const errorImg = document.querySelector("#div-four-error");
const errorVideo = document.querySelector("#div-five-error");
const errorYear = document.querySelector("#div-six-error");
const dark = document.querySelector(".dark");
const editBtn = document.querySelector("#editBtn");
const deleteBtn = document.querySelector("#deleteBtn");

let filme;
let idFilm = 0;

const movie = {
  name: "",
  director: "",
  rating: "",
  image: "",
  video: "",
  year: "",
};

let formulaString = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
let formulaNumber = /^\d{10}$/;
let stringCheck, valid;



fetch("http://localhost:3001/filme", {
  method: "POST",
  body: JSON.stringify(movie),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json());


  const editMovie = () => {
    fetch(`http://localhost:3001/filme/${idFilm}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        //.then((json) => console.log(json));
      console.log(movie,idFilm);
  };

submit.addEventListener("click", editMovie);

movieName.addEventListener("change", (e) => {
  movie.name = e.target.value;
  stringCheck = movie.name;
  if (stringCheck) {
    errorName.innerHTML = "";
    valid = true;
  } else {
    errorName.innerHTML = "Insert a valid name!"; 
    valid = false;
  }
});

movieDirector.addEventListener("change", (e) => {
  movie.director = e.target.value;
  stringCheck = movie.director;
  if (stringCheck.match(formulaString) && !stringCheck.match(formulaNumber)) {
    errorDirector.innerHTML = "";
    valid = true;
  } else {
    errorDirector.innerHTML = "Insert a valid name!";
    valid = false;
  }
});

rating.addEventListener("change", (e) => {
   movie.rating = e.target.value;
    if (movie.rating > 0 && movie.rating <= 5) {
      errorRating.innerHTML = "";
      valid = true;
    } else {
      errorRating.innerHTML = "Insert a rating between 1 and 5! "; 
      valid = false;
    }
  });

  year.addEventListener("change", (e) => {
    movie.year = e.target.value;
     if (movie.year.length === 4 ) {
       errorYear.innerHTML = "";
       valid = true;
     } else {
       errorYear.innerHTML = "Insert a valid year! ";
       valid = false;
     }
   });

   dark.addEventListener("click", () => {
    let b = document.body;
    b.classList.toggle("dark-mode");
})