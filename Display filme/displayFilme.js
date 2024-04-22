const dark = document.querySelector(".dark");
const listDisplay = document.querySelector("#list-display");

let burger =document.querySelector("#burger");
let closeBtn =document.querySelector("#close");
let responsiveDrop =document.querySelector("#responsive-drop");

let queryString = location.search.substring(1);
let a = queryString.split("|");
let reciveName = a[0];
let name = reciveName.split("%20").join(" ");
let recivePhoto = a[1];
let reciveDirector = a[2];
let director = reciveDirector.split("%20").join(" ");
let reciveYear = a[3];
let reciveDescription = a[4];
let description = reciveDescription.split("%20").join(" ");
let reciveRating = a[5];
let reciveRuntime = a[6];
let runtime = reciveRuntime.split("%20").join(" ");
let reciveVideo = a[7];
let reciveId = a[8];
let reciveCategory = a[9];


let arrayFilm = localStorage.getItem("arrayFilm");
let retArr = [];
let retArrId = [];
if(arrayFilm){
  retArr = JSON.parse(arrayFilm);
}
retArr.push(reciveCategory);
localStorage.setItem("arrayFilm", JSON.stringify(retArr));
console.log(retArr);
let response = JSON.parse(localStorage.getItem("arrayFilm"));

let idFilmeAfterClick = localStorage.getItem("idFilmeAfterClick", retArrId);
      if (idFilmeAfterClick) {
        retArrId = JSON.parse(idFilmeAfterClick);
      }
      retArrId.push(reciveId);
      localStorage.setItem("idFilmeAfterClick", JSON.stringify(retArrId));
      console.log(retArrId);

const displayDetails = () => {
  listDisplay.innerHTML += `<div id = "display-filme" target="_blank">
      <img class="display-img" src=${recivePhoto}/> 
      <h1>${name}</h1> 
      <h3>Director:${director} </h3>
      <h3> Year: ${reciveYear} Ratings: ${reciveRating} Runtime: ${runtime}</h3> 
      <p id="display-p">Description : ${description}</p>
      <a href= "${reciveVideo}" id="trailer" target="_blank">Trailer</a>
      </div>`;
};
displayDetails();

dark.addEventListener("click", () => {
  let b = document.body;
  b.classList.toggle("dark-mode");
});

burger.addEventListener("click", () => {
  responsiveDrop.style.display = "block";
  closeBtn.style.display = "block";
  burger.style.display = "none";
})

closeBtn.addEventListener("click", () => {
  responsiveDrop.style.display = "none";
  closeBtn.style.display = "none";
  burger.style.display = "block";
})
