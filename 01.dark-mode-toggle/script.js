const btn = document.getElementById("toggleBtn");
const heading = document.querySelector("h1");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    heading.innerText = "IN DARK MODE";
  } else {
    heading.innerText = "IN LIGHT MODE";
  }
});
