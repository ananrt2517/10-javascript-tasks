let change = document.querySelector("#change");
let click = 0;

change.addEventListener("click", function () {
  click++;
  if (click % 2 != 0) {
    document.querySelector(".changeColorDiv").classList.add('pinkClass');
  } else {
    document.querySelector(".changeColorDiv").classList.remove('pinkClass');
  }
});
