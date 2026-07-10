const paintings = [
  "images/painting1.jpg",
  "images/painting2.jpg",
  "images/painting3.jpg",
  "images/painting4.jpg",
  "images/painting5.jpg",
  "images/painting6.jpg",
  "images/painting7.jpg",
  "images/painting8.jpg"
];

let current = 0;
const painting = document.getElementById("painting");

function showImage(index) {
  painting.src = paintings[index];
}

function nextImage() {
  current = (current + 1) % paintings.length;
  showImage(current);
}

setInterval(nextImage, 4000);