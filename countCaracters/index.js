let input = document.querySelector(".input");
let result = document.querySelector("#result");

input.addEventListener("input", function () {
  for (let i = 0; i < input.value.length + 1; i++) {
      result.innerHTML = input.value.length;
  }
});
