// function returnNumber(num, min, max){
//     let number = Math.random()*num;
//    if(num>=min && num<=max){
//        console.log('True');
//    }else {
//        console.log('False')
//    }
// }
// returnNumber(20, 10, 60);

//zadatak2

let array = [3,1,'afs', 'vre', 4];

function findNumber(arr){
    let newArray = [];
    for(let i = 0; i<arr.length; i++){
        if(Number.isInteger(arr[i])){
            console.log(arr[i])
            // newArray.push(arr[i]);
        }
    }
    newArray.sort(function(a, b){return a-b});
    let min = newArray[0];
    // console.log(min);
   
}
let funkc = findNumber(array);
console.log(funkc)
