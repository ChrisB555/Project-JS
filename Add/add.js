const movieName = document.querySelector("#name");
const director = document.querySelector("#director");
const rating = document.querySelector("#rating");
const photo = document.querySelector("#photo");
const video = document.querySelector("#video");
const year = document.querySelector("#year");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const runtime = document.querySelector("#runtime");

const submit = document.querySelector("#submit");

const errorName = document.querySelector("#div-one-error");
const errorDirector = document.querySelector("#div-six-error");
const errorDescription = document.querySelector("#div-three-error");
const errorRating = document.querySelector("#div-five-error");
const errorPhoto = document.querySelector("#div-two-error");
const errorVideo = document.querySelector("#div-nine-error");
const errorRuntime = document.querySelector("#div-four-error");
const errorYear = document.querySelector("#div-seven-error");
const errorCategory = document.querySelector("#div-eight-error");
const list = document.querySelector("#list");

const dark = document.querySelector(".dark");

let formulaString = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
let formulaNumber = /^\d{10}$/;
let formulaUrl = /^https?:\/\/(www\.)?example\.com(?:\/.*)?$/;

let stringCheck, valid;

let movie = {
  name: "",
  photo: "",
  description: "",
  runtime: "",
  rating: "",
  year: "",
  director: "",
  category: "",
  video: "",
};

const addMovie = () => {
  location.reload();
  fetch("http://localhost:3001/filme", {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }) 
  if(valid === true){
  location.href = "file:///C:/IT/Proiect%20JS/Filme/filme.html";

  }else list.innerHTML = "fields must be completed!" ;
  
};

submit.addEventListener("click", addMovie);

movieName.addEventListener("change", (e) => {
  movie.name = e.target.value;
  stringCheck = movie.name;
  if (stringCheck) {
    errorName.innerHTML = "";
    valid = true;
  } else {
    errorName.innerHTML = "Insert a valid  movie name!";
    valid = false;
  }
});

photo.addEventListener("change", (e) => {
  movie.photo = e.target.value;
  stringCheck = movie.photo;
  if (stringCheck) {
    errorPhoto.innerHTML = "";
    valid = true;
  } else {
    errorPhoto.innerHTML = "Insert a valid  url!";
    valid = false;
  }
});

description.addEventListener("change", (e) => {
  movie.description = e.target.value;
  stringCheck = movie.description;
  if (stringCheck) {
    errorDescription.innerHTML = "";
    valid = true;
  } else {
    errorDescription.innerHTML = "Insert a description!";
    valid = false;
  }
});

director.addEventListener("change", (e) => {
  movie.director = e.target.value;
  stringCheck = movie.director;
  if (stringCheck.match(formulaString) && !stringCheck.match(formulaNumber)) {
    errorDirector.innerHTML = "";
    valid = true;
  } else {
    errorDirector.innerHTML = "Insert a valid  director name!";
    valid = false;
  }
});

runtime.addEventListener("change", (e) => {
  movie.runtime = e.target.value;
  stringCheck = movie.runtime;
  if (stringCheck) {
    errorRuntime.innerHTML = "";
    valid = true;
  } else {
    errorRuntime.innerHTML = "Insert the runtime!";
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
  if (movie.year.length === 4) {
    errorYear.innerHTML = "";
    valid = true;
  } else {
    errorYear.innerHTML = "Insert a valid year! ";
    valid = false;
  }
});

category.addEventListener("change", (e) => {
  movie.category = e.target.value;
  stringCheck = movie.category;
  if (stringCheck) {
    errorCategory.innerHTML = "";
    valid = true;
  } else {
    errorCategory.innerHTML = "Insert a category!";
    valid = false;
  }
});

video.addEventListener("change", (e) => {
  movie.video = e.target.value;
  stringCheck = movie.video;
  if (stringCheck) {
    errorVideo.innerHTML = "";
    valid = true;
  } else {
    errorVideo.innerHTML = "Insert a valid  url!";
    valid = false;
  }
});

dark.addEventListener("click", () => {
  let b = document.body;
  let main = document.querySelector("#form");
  b.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
});
