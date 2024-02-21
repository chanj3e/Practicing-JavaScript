let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // [1] add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] remove active class
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  //   [3] add acive class
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // remove active class
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // add active to current li
    e.currentTarget.classList.add("active");
    // add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // add color to div
    exp.style.backgroundColor = window.localStorage.getItem("color");
  });
});
