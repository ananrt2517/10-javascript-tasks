let result = document.querySelector("#result");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let count = 0;

plus.addEventListener('click', function(){
    count ++;
    result.innerHTML = `<span class="spanCount">${count}</span>`;
})
minus.addEventListener('click', function(){
    count --;
    result.innerHTML = `<span class="spanCount">${count}</span>`;
})