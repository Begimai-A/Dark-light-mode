 const modeBtn = document.querySelector("#toggle");


modeBtn.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
});
