randomArray = [0, 1, -1, 2, -3, 4, -5, 6, -7];
function sumOf3Integers() {
    for (var i = 0; i < randomArray.length - 2; i++) {
        for (var j = i + 1; j < randomArray.length - 1; j++) {
            for (var k = j + 1; k < randomArray.length; k++) {
                if (randomArray[i] + randomArray[j] + randomArray[k] == 0) {
                    console.log(randomArray[i] +" | "+randomArray[j]+" | "+ randomArray[k]);
                    found = true;
                }
            }
        }
        if(found == false){
            console.log("not exit")
        }
    }
}

sumOf3Integers(randomArray);