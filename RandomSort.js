var randomCount = 10;
let arr = [];
for (i = 0; i < randomCount; i++) {
    arr[i] = Math.floor(Math.random() * 899) + 100;
}
console.log("10 Random numbers are : " +arr);
let sortArray = arr.sort();
console.log("Sorted list of 10 Random numbers : " +sortArray);
console.log("Second Largest number  : " + arr[arr.length-2]);
console.log("Second Smallest number: " + arr[1]);