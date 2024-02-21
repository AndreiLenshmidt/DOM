const getData = async (URL) => {
  const response = await fetch(URL);
  const data = response.json();
  console.log(data);
  return data;
};

const buttons = document.querySelectorAll(".fa-thumbs-up");
const likes = document.querySelector(".likevalue");
let like;

try {
  const photo = await getData(
    "https://api.unsplash.com/photos/random?client_id=JzS47ahSDHUO7ZhYxHgziLd85rLGk8JEuktUQPNXsLs"
  );
  const img = document.querySelector("img");
  const author = document.querySelector(".author");
  img.setAttribute("src", photo.urls.small);
  likes.textContent = photo.likes;
  author.textContent = photo.user.first_name + " " + photo.user.last_name;
  like = localStorage.getItem(String(photo.id));
  if (like === "true") {
    buttons[0].dispatchEvent(new Event("click"));
  }

  buttons[0].addEventListener("click", () => {
    buttons[0].classList.add("none");
    buttons[1].classList.remove("none");
    localStorage.setItem(String(photo.id), "true");
    likes.textContent = ++likes.textContent;
  });

  buttons[1].addEventListener("click", () => {
    buttons[1].classList.add("none");
    buttons[0].classList.remove("none");
    localStorage.setItem(String(photo.id), "false");
    likes.textContent = --likes.textContent;
  });
} catch (error) {
  console.log(error.message);
}
