let result = document.querySelector(".result");

function pushBtn(obj) {
  let pushedBtn = obj.innerText;

  if (pushedBtn == "=") {
    result.innerHTML = eval(result.innerHTML);
    console.log(result.innerHTML)
  } else if (pushedBtn == "AC") {
    result.innerHTML = "";
    console.log(result)
  } else {
    if (pushedBtn == "0") {
      result.innerHTML += pushedBtn;
      console.log(result)
    } else {
      result.innerHTML += pushedBtn;
      console.log(result.innerHTML)
    }
  }
}
