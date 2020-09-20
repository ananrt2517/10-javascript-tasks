let slider = document.querySelector(".slider");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let count = 0;

rightArrow.addEventListener("click", function () {
        slider.classList.remove('slider' + count)
        count++
        slider.classList.add('slider' + count);
        console.log(slider)
        if(count > 2){
            count = -1;
            slider.classList.add('slider' + count);
        }
});



leftArrow.addEventListener("click", function () {
    slider.classList.remove('slider' + count)
    console.log(slider)
        count--;
        slider.classList.add('slider' + count);
    if(count <-1){
        count = 2;
        slider.classList.add('slider' + count);
    }
});

