const display = document.querySelector("#display");
const randomDisplay = document.querySelector("#randomDisplay");
const error = document.querySelector("#error");
const dark = document.querySelector(".dark");
const recommendText = document.querySelector("#recommendText");
const randomText = document.querySelector("#randomText");

let burger = document.querySelector("#burger");
let closeBtn = document.querySelector("#close");
let responsiveDrop = document.querySelector("#responsive-drop");

let filme,p,random;
let idFilmArr;
let categoryArr = ["adventure", "action", "comedy", "drama", "thriller"];
let counts = {};

let response = JSON.parse(localStorage.getItem("arrayFilm"));
console.log(response);

//localStorage.clear("arrayFilm");

const getMovies = async () => {
  const filmeLocal = await fetch("http://localhost:3001/filme/").then(
    (response) => response.json()
  );
  return filmeLocal;
};

const main = async () => {
  const date = await getMovies();
  filme = date;
  if(response.length === 0){
  random =  filme[Math.floor(Math.random() * 10)];
  console.log("server movies", random);
    p = `<div id = "lista-filme" > 
    <img class="main-img"src=${random.photo}/> 
    <h3 id="h4">${random.name}</h3> 
    <h5>Director: ${random.director}</h5> 
    <h5>Release year: ${random.year}</h5> 
    <h5>Ratings: ${random.rating} </h5>
    <h5>Category: ${random.category} </h5>
    </div>`;
    display.innerHTML += p;
    console.log(random.id,response);
    idFilmArr = localStorage.setItem("IdFilme",random.id);
  }else{
    filme.filter(e => {
      if(mostFrequent === e.category){
        p = `<div id = "lista-filme" > 
        <img class="main-img"src=${e.photo}/> 
        <h3 id="h4">${e.name}</h3> 
        <h5>Director: ${e.director}</h5> 
        <h5>Release year: ${e.year}</h5> 
        <h5>Ratings: ${e.rating} </h5>
        <h5>Category: ${e.category} </h5>
        </div>`;
        display.innerHTML += p;
      }
    })
  }
}

main();

  response.forEach(e => {
      if (counts[e]) {
          counts[e]++;
      } else {
          counts[e] = 1;
      }
  });

 console.log(counts)

let maxCount = 0;
let mostFrequent = null;

    for (const category in counts) {
        if (counts[category] > maxCount) {
            maxCount = counts[category];
            mostFrequent = category;
        }
      
    } 
    console.log(mostFrequent);



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
