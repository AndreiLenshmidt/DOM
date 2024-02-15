const images = [
  "https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg?w=740&t=st=1707999558~exp=1708000158~hmac=d0f4f3edc35958ffb5aec246efd4ddae295d2155bef8d2e4dfdac3a6235be93b",
  "https://img.freepik.com/free-photo/breathtaking-shot-of-beautiful-stones-under-turquoise-water-of-a-lake-and-hills-in-the-background_181624-12847.jpg?w=740&t=st=1707999550~exp=1708000150~hmac=f353930fb03c136a0e1d8aee98aba688761629eeb8832f653eee360ec48450a1",
  "https://img.freepik.com/free-photo/morskie-oko-in-tatry_1204-510.jpg?w=740&t=st=1707999585~exp=1708000185~hmac=baa914f0ba6d92910143853a7d147eaf2db6f23f89fde469766bea5df5e6ed7a",
];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img = document.querySelector(".img");
const circles = document.querySelectorAll(".circle");
let counter = 0;

next.addEventListener("click", () => {
  if (counter < images.length - 1) {
    circles[counter].classList.remove("circle-active");
    img.setAttribute("src", images[++counter]);
    circles[counter].classList.add("circle-active");
  } else {
    circles[counter].classList.remove("circle-active");
    img.setAttribute("src", images[0]);
    circles[0].classList.add("circle-active");
    counter = 0;
  }
});

prev.addEventListener("click", () => {
  if (counter > 0) {
    circles[counter].classList.remove("circle-active");
    img.setAttribute("src", images[--counter]);
    circles[counter].classList.add("circle-active");
  } else {
    circles[counter].classList.remove("circle-active");
    img.setAttribute("src", images[images.length - 1]);
    circles[images.length - 1].classList.add("circle-active");
    counter = images.length - 1;
  }
});

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    img.setAttribute("src", images[i]);
    document.querySelector(".circle-active").classList.remove("circle-active");
    circles[i].classList.add("circle-active");
    counter = i;
  });
}
