let listaValuta = [
  {
    name: "dollar",
    value: 98.2289,
  },
  {
    name: "euro",
    value: 117.58,
  },
];

let inputRSD = document.querySelector("#inputRSD");
let selectOption = document.querySelector(".selectOption");
let submit = document.querySelector("#submit");
let result = document.querySelector(".result");

submit.addEventListener("click", function () {
  if (inputRSD.value == "") {
    alert("Please input RSD value");
    return;
  }
  for (let item of listaValuta) {
    if (selectOption.value == item.name) {
      result.innerHTML =
        (inputRSD.value / item.value).toFixed(2) + " " + item.name + "'s";
    }
  }
});
