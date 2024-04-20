const display = document.querySelector("#display");
const randomDisplay = document.querySelector("#randomDisplay");
const error = document.querySelector("#error");
const dark = document.querySelector(".dark");
const recommendText = document.querySelector("#recommendText");
const randomText = document.querySelector("#randomText");

let burger = document.querySelector("#burger");
let closeBtn = document.querySelector("#close");
let responsiveDrop = document.querySelector("#responsive-drop");

let filme, p, random;
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
  if (response === null) {
    random = filme[Math.floor(Math.random() * (filme.length + 1))];
    console.log("server movies", random);
    p = `<a href= "../Display filme/displayfilme.html?${random.name}|${
      random.photo
    }|${random.director}|${random.year}|${random.description}|${
      random.rating
    }|${random.runtime}|${random.video}|${random.id}|${random.category}"
    
    
    
    target = "_self" id = "lista-filme">
       <img class="main-img"src=${random.photo}/> 
       <h3 id="h4">${random.name}</h3> 
       <h5>Director: ${random.director}</h5> 
       <h5>Release year: ${random.year}</h5> 
       <h5>Category:: ${random.category}</h5> 
       <h5>Ratings: ${random.rating} 
       ${displayStar(random.rating)}</h5>
       </a>`;
    display.innerHTML += p;
    console.log(random.id, response);
    localStorage.setItem("IdFilme", random.id);
    idFilmArr.push(random.id);
  } else {
    filme.filter((e) => {
      if (mostFrequent === e.category) {
        p = `<a href= "../Display filme/displayfilme.html?${e.name}|${
          e.photo
        }|${e.director}|${e.year}|${e.description}|${e.rating}|${e.runtime}|${
          e.video
        }|${e.id}|${e.category}"
    
    
    
        target = "_self" id = "lista-filme">
           <img class="main-img"src=${e.photo}/> 
           <h3 id="h4">${e.name}</h3> 
           <h5>Director: ${e.director}</h5> 
           <h5>Release year: ${e.year}</h5> 
           <h5>Category:: ${e.category}</h5> 
           <h5>Ratings: ${e.rating} 
           ${displayStar(e.rating)}</h5>
           </a>`;
        display.innerHTML += p;
      }
    });
  }
};

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

main();

if (response) {
  response.forEach((e) => {
    if (counts[e]) {
      counts[e]++;
    } else {
      counts[e] = 1;
    }
  });
}

console.log(counts);

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
