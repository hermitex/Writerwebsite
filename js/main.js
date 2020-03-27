const allInput = document.querySelectorAll("form input");
const formDiv = document.querySelector(".contact-form ");

allInput.forEach(element => {
  element.addEventListener("mouseover", e => {
    formDiv.classList.add("z-index-2");
  });
  element.addEventListener("blur", () => {
    formDiv.classList.remove("z-index-2");
  });
});
