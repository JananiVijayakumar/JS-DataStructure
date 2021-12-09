var randomCount = 10;
let array = [];
for (i = 0; i < randomCount; i++) {
    array[i] = Math.floor(Math.random() * 899) + 100;
}
var secondMax = function (arr){ 
    var max = Math.max.apply(null, arr); 
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr);
};
var secondMin = function (arr){ 
    var min = Math.min.apply(null, arr); 
    arr.splice(arr.indexOf(min), 1); 
    return Math.min.apply(null, arr);
};
console.log("10 Random 3 digits numbers are: " +array);
let secondMaxResult = secondMax(array);
console.log("Second Largest number of an array list : " +secondMaxResult);
let secondMinResult = secondMin(array);
console.log("Second smallest number of an array list : " +secondMinResult);