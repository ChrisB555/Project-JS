const display = document.querySelector("#display");
const randomDisplay = document.querySelector("#randomDisplay");
const error = document.querySelector("#error");
const refreshBtn = document.querySelector("#refresh");
const dark = document.querySelector(".dark");
const recommendText = document.querySelector("#recommendText");
const randomText = document.querySelector("#randomText");

let burger = document.querySelector("#burger");
let closeBtn = document.querySelector("#close");
let responsiveDrop = document.querySelector("#responsive-drop");


let filme, p, random, lastIdRecommended, idRecommended;
let idFilmArr1, idFilme, idFilmArr3;

let categoryArr = ["adventure", "action", "comedy", "drama", "thriller"];
let counts = {};
let idArr = [];

let response = JSON.parse(localStorage.getItem("arrayFilm"));
console.log("category", response);
let idFilmArr2 = JSON.parse(localStorage.getItem("idFilmeAfterClick"));
console.log("idAfterClick", idFilmArr2);

const getMovies = async () => {
  const filmeLocal = await fetch("http://localhost:3001/filme/").then(
    (response) => response.json()
  );
  return filmeLocal;
};

const main = async () => {
  const date = await getMovies();
  filme = date;
  if (response === null) {

    random = filme[Math.floor(Math.random() * 10)];
    console.log("server movies", random);
    randomText.innerHTML = "We can recommend you:";
    p = `<div id = "lista-filme" >  
    <img class="main-img"src=${random.photo}/> 
    <h3 id="h4">${random.name}</h3> 
    <h5>Director: ${random.director}</h5> 
    <h5>Release year: ${random.year}</h5> 
    <h5>Ratings: ${random.rating} </h5>
    <h5>Category: ${random.category} </h5>
    </div>`;
    display.innerHTML += p;
    console.log(random.id);
    idFilmArr1 = localStorage.setItem("IdFilmeRandom", random.id);
  } else {
    filme.find((el) => {
      let lastId = idFilmArr2[idFilmArr2.length - 1];

      if (el.id.toString() !== lastId && el.category === mostFrequent) {
        recommendText.innerHTML = "We can recommend you:";
        p = `<div id = "lista-filme" > 
          <img class="main-img"src=${el.photo}/> 
          <h3 id="h4">${el.name}</h3> 
          <h5>Director: ${el.director}</h5> 
          <h5>Release year: ${el.year}</h5> 
          <h5>Ratings: ${el.rating} </h5>
          <h5>Category: ${el.category} </h5>
          </div>`;
        display.innerHTML += p;
        error.style.display = "none";

        lastIdRecommended = el.id.toString();
        idRecommended = localStorage.getItem("idFilme", idArr);
        if (idRecommended) {
          idArr = JSON.parse(idRecommended);
        }
        idArr.push(lastIdRecommended);
        localStorage.setItem("idFilme", JSON.stringify(idArr));
        idFilmArr3 = JSON.parse(localStorage.getItem("idFilme"));
        console.log("idFilme", idFilmArr3);
        let lastIdRec = idFilmArr3[idFilmArr3.length - 1];

        idFilmArr3.find((el) => {
          filme.find((el) => {
            if (el.id.toString() !== lastId && lastIdRec !== el.id) {
              recommendText.innerHTML = "We can recommend you:";
              p = `<div id = "lista-filme" > 
                <img class="main-img"src=${el.photo}/> 
                <h3 id="h4">${el.name}</h3> 
                <h5>Director: ${el.director}</h5> 
                <h5>Release year: ${el.year}</h5> 
                <h5>Ratings: ${el.rating} </h5>
                <h5>Category: ${el.category} </h5>
                </div>`;

              display.innerHTML += p;
              error.style.display = "none";
            } else
              error.innerHTML = "We don't have any movies to recommend you:";
          });
        });

        return el.category === mostFrequent && el.id.toString() !== lastId;
      } else error.innerHTML = "We don't have any movies to recommend you:";
    });
  }
};

main();

response.forEach((e) => {
  if (counts[e]) {
    counts[e]++;
  } else {
    counts[e] = 1;
  }
});

   

const displayStar = (stars) => {
  stars = Math.round(stars * 2) / 2;
  let arr = [];
  let i;
  for (i = stars; i >= 1; i--) {
    arr.push(`<i id="star" class="ri-star-fill"></i>`);
  }
  if (i == 0.5) {
    arr.push(`<i class="ri-star-half-line" id="halfStar"></i>`);
  }
  for (i = 5 - stars; i >= 1; i--) {
    arr.push(`  <i class="ri-star-line" id="emptyStar"></i>`);
  }
  return arr.join("");
};




let maxCount = 0;
let mostFrequent = null;

for (const category in counts) {
  if (counts[category] > maxCount) {
    maxCount = counts[category];
    mostFrequent = category;
  }
}


const refresh = refreshBtn.addEventListener("click", () => {
  localStorage.clear(
    "arrayFilm",
    "idFilmeAfterClick",
    "IdFilmeRandom",
    "idFilme"
  );
  location.reload();
});
dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});

burger.addEventListener("click", () => {
  responsiveDrop.style.display = "block";
  closeBtn.style.display = "block";
  burger.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  responsiveDrop.style.display = "none";
  closeBtn.style.display = "none";
  burger.style.display = "block";
});
