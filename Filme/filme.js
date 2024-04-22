const dark = document.querySelector(".dark");
const searchBar = document.querySelector("#searchBar");
const list = document.querySelector("#list");
const listDisplay = document.querySelector("#list-display");
const error = document.querySelector("#error");
const reset = document.querySelector("#reset");
const category = document.querySelector("#category");
const rates = document.querySelector("#rates");
const year = document.querySelector("#year");

const dropDown1 = document.querySelector(".dropdown-menu1");
const dropDown2 = document.querySelector(".dropdown-menu2");
const dropDown3 = document.querySelector(".dropdown-menu3");

const adventure = document.querySelector("#adventure");
const action = document.querySelector("#action");
const comedy = document.querySelector("#comedy");
const drama = document.querySelector("#drama");
const thriller = document.querySelector("#thriller");

const star1 = document.querySelector("#star1");
const star2 = document.querySelector("#star2");
const star3 = document.querySelector("#star3");
const star4 = document.querySelector("#star4");
const star5 = document.querySelector("#star5");

const year1 = document.querySelector("#year1");
const year2 = document.querySelector("#year2");
const year3 = document.querySelector("#year3");

let burger = document.querySelector("#burger");
let closeBtn = document.querySelector("#close");
let responsiveDrop = document.querySelector("#responsive-drop");

let filme, found, f, stars, x, mov, int, str;
let searchMovie = "";
let categoryArr = ["adventure", "action", "comedy", "drama", "thriller"];
let searchCategory = [...categoryArr];
let starsArr = [1, 2, 3, 4, 5];
let searchStar = [...starsArr];
let yearArr = [2024, 2023, 2022];
let searchYear = [...yearArr];






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
    let p = `<a href= "file:///C:/IT/Proiect%20JS/Display%20filme/displayFilme.html?${
      element.name
    }|${element.photo}|${element.director}|${element.year}|${
      element.description

    }|${element.rating}|${element.runtime}|${element.video}|${element.id}|${
      element.category
    }"



    target = "_self" id = "lista-filme">
       <img class="main-img"src=${element.photo}/> 
       <h3 id="h4">${element.name}</h3> 
       <h5>Director: ${element.director}</h5> 
       <h5>Release year: ${element.year}</h5> 
       <h5>Category:: ${element.category}</h5> 
       <h5>Ratings: ${element.rating} 
       ${displayStar(element.rating)}</h5>
       </a>`;
    list.innerHTML += p;
  });
};

main();

//functia care afiseaza stars in functie de rating

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

//afisare ce sorteaza

const displaySort = (movie) => {
  for (let film of movie) {
    let p = `<a id = "lista-filme" target="_blank">
    <img class="main-img"src=${film.photo}/> 
    <h3 id="h4">${film.name}</h3> 
    <h5>Director: ${film.director}</h5> 
    <h5>Release year: ${film.year}</h5> 
    <h5>Category:: ${film.category}</h5> 
    <h5>Ratings: ${film.rating} ${displayStar(film.rating)} </h5>
    </a>`;
    list.innerHTML += p;
  }
};

//eventurile onclick de la primul drop
adventure.addEventListener("click", () => {
  if (searchCategory[0] === "adventure") {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.category.toLowerCase().includes(searchCategory[0]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that category";
  }
});

action.addEventListener("click", () => {
  if (searchCategory[1] === "action") {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.category.toLowerCase().includes(searchCategory[1]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that category";
  }
});

comedy.addEventListener("click", () => {
  if (searchCategory[2] === "comedy") {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.category.toLowerCase().includes(searchCategory[2]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that category";
  }
});

drama.addEventListener("click", () => {
  if (searchCategory[3] === "drama") {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.category.toLowerCase().includes(searchCategory[3]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that category";
  }
});

thriller.addEventListener("click", () => {
  if (searchCategory[4] === "thriller") {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.category.toLowerCase().includes(searchCategory[4]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that category";
  }
});
//eventurile onclick de la stars drop
star1.addEventListener("click", () => {
  if (searchStar[0] === 1) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        int = parseInt(film.rating);
        str = int.toString();
        x = str.includes(searchStar[0]);
        console.log(x);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        } else {
          error.innerHTML = "Sorry!There is no movie with that rate";
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

star2.addEventListener("click", () => {
  if (searchStar[1] == 2) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        int = parseInt(film.rating);
        str = int.toString();
        x = str.includes(searchStar[1]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        } else {
          error.innerHTML = "Sorry!There is no movie with that rate";
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

star3.addEventListener("click", () => {
  if (searchStar[2] === 3) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        int = parseInt(film.rating);
        str = int.toString();
        console.log(str);
        x = str.includes(searchStar[2]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

star4.addEventListener("click", () => {
  if (searchStar[3] === 4) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        int = parseInt(film.rating);
        str = int.toString();
        x = str.includes(searchStar[3]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

star5.addEventListener("click", () => {
  if (searchStar[4] === 5) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        int = parseInt(film.rating);
        str = int.toString();
        x = str.includes(searchStar[4]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

//eventurile de pe drop year

year1.addEventListener("click", () => {
  if (searchYear[0] === 2024) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.year.includes(searchYear[0]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

year2.addEventListener("click", () => {
  if (searchYear[1] === 2023) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.year.includes(searchYear[1]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

year3.addEventListener("click", () => {
  if (searchYear[2] === 2022) {
    displaySort(
      filme.filter((film) => {
        error.innerHTML = "";
        x = film.year.includes(searchYear[2]);
        if (x === true) {
          list.innerHTML = "";
          error.innerHTML = "";
          return x;
        }
      })
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that rate";
  }
});

//searchbar
searchBar.addEventListener("change", (e) => {
  searchMovie = e.target.value;
  if (searchMovie) {
    searchMovie = searchMovie.trim();
    displayMovie(
      (found = filme.filter((film) => {
        error.innerHTML = "";
        listDisplay.innerHTML = "";
        return film.name.toLowerCase().includes(searchMovie);
      }))
    );
  } else {
    error.innerHTML = "Sorry!There is no movie with that name";
    listDisplay.innerHTML = "";
  }
  if (found.length === 0) {
    error.innerHTML = "Sorry!There is no movie with that name";
    listDisplay.innerHTML = "";
  }
});

const displayMovie = (movie) => {
  for (let film of movie) {
    listDisplay.innerHTML += `<div id = "display-filme" target="_blank">
        <img class="display-img" src=${film.photo}/> 
        <h1>${film.name}</h1> 
        <h3>Director:${film.director}   Year:${film.year}</h3> 
        <p id="display-p">Description :${film.description} </p>
        </div>`;
  }
  list.style.display = "none";
};

reset.addEventListener("click", () => {
  location.href = "filme.html";
});
//dark mode
dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});
//functionalitate dropdownuri
const toggleDropdown1 = function () {
  dropDown1.classList.toggle("dropdown");
};
category.addEventListener("click", () => {
  toggleDropdown1();
});

const toggleDropdown2 = function () {
  dropDown2.classList.toggle("dropdown");
};
rates.addEventListener("click", () => {
  toggleDropdown2();
});

const toggleDropdown3 = function () {
  dropDown3.classList.toggle("dropdown");
};
year.addEventListener("click", () => {
  toggleDropdown3();
});
//responsive nav

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
