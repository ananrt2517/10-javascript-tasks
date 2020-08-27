let result = document.querySelector(".result");

function pushBtn(obj) {
  let pushedBtn = obj.innerText;
  let operations = [".", "+", "-", "/", "*"];

  if (operations.indexOf(pushedBtn) != -1) {
    for (let i = 0; i < operations.length; i++) {
      if (result.innerText.includes(operations[i])) return;
    }
  }

  for (let item of operations) {
    if (result.innerHTML == "" && pushedBtn == item) {
      return;
    }
  }

  if (pushedBtn == "=") {
    if (result.innerHTML != "") {
      result.innerHTML = eval(result.innerHTML);
    } else {
      return;
    }
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
