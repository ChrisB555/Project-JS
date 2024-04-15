const dark = document.querySelector(".dark");
const listDisplay = document.querySelector("#list-display");

//let local = localStorage["filmDetail"];
//console.log(local);

//const urlParams = new URLSearchParams(window.location.search);
//const recive = urlParams.get("send");
//console.log(recive);

let queryString = location.search.substring(1);
console.log(queryString);
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
