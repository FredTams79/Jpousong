//Affichage date et heure actuelles
const today = new Date();

let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let hours = today.getHours() + ":" + today.getMinutes();
const fullDate = date + " à " + hours;
console.log(fullDate);

document.getElementById("date").innerHTML = fullDate;

//Carrousel
//let myCarousel = document.getElementById('myCarousel')

//myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
//})
