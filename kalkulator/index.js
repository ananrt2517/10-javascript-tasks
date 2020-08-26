let result = document.querySelector(".result");

function pushBtn(obj) {
  let pushedBtn = obj.innerText;

  if (pushedBtn == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else if (pushedBtn == "AC") {
    result.innerHTML = "";
  } else {
    if (pushedBtn == "0") {
      result.innerHTML += pushedBtn;
    } else {
      result.innerHTML += pushedBtn;
    }
  }
}
