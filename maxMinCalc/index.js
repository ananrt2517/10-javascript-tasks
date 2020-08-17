let minVal = document.querySelector(".minVal");
let maxVal = document.querySelector(".maxVal");
let showResult = document.querySelector(".result");
let submitBtn = document.querySelector(".submitBtn");

function randomResult() {
  let minimum = parseInt(minVal.value);
  let maximum = parseInt(maxVal.value);

  if (minimum && maximum) {
    let result = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    showResult.innerHTML = `
        <div class="styleResult">${result}</div>
       `;
  } else {
    alert("You have to input both numbers");
  }
}

submitBtn.addEventListener("click", () => randomResult());
