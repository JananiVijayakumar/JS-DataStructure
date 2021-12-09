var firstDigit;
var lastDigit;
var sum;
for(i=1;i<100;i++){
    lastDigit=i%10;
    firstDigit=Math.floor(i/10);
    sum=lastDigit*10+firstDigit;
    if(sum===i){
        var array = [i];
        console.log(array);
    }
}