let result = document.querySelector(".result");
// console.log(result.innerHTML)

function pushBtn(obj) {
  let pushedBtn = obj.innerText;
  // console.log(pushedBtn)

  if (pushedBtn == "=") {
    result.innerHTML = eval(result.innerHTML);
    // return result;
    console.log(result.innerHTML)
  } else if (pushedBtn == "AC") {
    result.innerHTML = "0";
    // return result;
    console.log(result)
  } else {
    if (pushedBtn == "0") {
      result.innerHTML = pushedBtn;
      console.log(result)
      // return result;
    } else {
      result.innerHTML += pushedBtn;
      // return result;
      console.log(result.innerHTML)
    }
  }
}
