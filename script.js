let image = document.getElementById("image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let imgarr = [
  "./assets/images/1.jpg",
  "./assets/images/2.jpg",
  "./assets/images/3.jpg",
  "./assets/images/4.jpg",
  "./assets/images/5.jpg",
  "./assets/images/6.jpg",
  "./assets/images/7.jpg",
  "./assets/images/8.jpg",
  "./assets/images/9.jpg",
  "./assets/images/10.jpg",
  "./assets/images/11.jpg",
  "./assets/images/12.jpg",
  "./assets/images/13.jpg",
  "./assets/images/14.jpg",
  "./assets/images/15.jpg",
  "./assets/images/16.jpg",
  "./assets/images/17.jpg",
  "./assets/images/18.jpg",
  "./assets/images/19.jpg",
  "./assets/images/20.jpg",
];
const display = document.getElementById("display");

let nameArr = [
  "SANTORINI",
  "BORA BORA",
  "KO SAMUI",
  "HVAR",
  "MAJORCA",
  "KAUAI",
  "BALI",
  "MALDIVES",
  "SEYCHELLES",
  "FIJI",
  "MALLORCA",
  "SAMOA",
  "ISLE OF SKYE",
  "GALAPAGOS",
  "HAWAII",
  "MALDIVES",
  "DALMATIAN ISLANDS",
  "ARUBA",
  "PALAWAN",
  "OLGA",
];

let n = 0;

const displayImages = () => {
  image.src = imgarr[n];
  display.innerHTML = nameArr[n];
  n++;
  if (n === imgarr.length) {
    n = 0;
  }
};

setInterval(() => {
  displayImages();
}, 9000);
console.log(image);

// imgarr.length - 1;
const backwards = () => {
  image.src = imgarr[n];
  display.innerHtml = nameArr[n];
  n--;
  if (n > 0) {
    n = imgarr.length - 1;
  }
};

nextBtn.addEventListener("click", displayImages);
prevBtn.addEventListener("click", backwards);
