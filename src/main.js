const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const level5 = document.querySelector(".level5");
const level6 = document.querySelector(".level6");
const level7 = document.querySelector(".level7");

let n = 1;

function addX(e) {
  const x = e.currentTarget;
  setTimeout(() => {
    x.classList.add("x");
  }, n * 1000);
  n += 1;
}

function removeX(e) {
  const x = e.currentTarget;
  setTimeout(() => {
    x.classList.remove("x");
  }, n * 1000);
  n += 1;
}

level1.addEventListener("click", removeX, true);
level1.addEventListener("click", addX);
level2.addEventListener("click", removeX, true);
level2.addEventListener("click", addX);
level3.addEventListener("click", removeX, true);
level3.addEventListener("click", addX);
level4.addEventListener("click", removeX, true);
level4.addEventListener("click", addX);
level5.addEventListener("click", removeX, true);
level5.addEventListener("click", addX);
level6.addEventListener("click", removeX, true);
level6.addEventListener("click", addX);
level7.addEventListener("click", removeX, true);
level7.addEventListener("click", addX);
