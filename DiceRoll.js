const dice = {};
const diceRoll = 10; 
let one = 1;
let two = 1;
let three = 1;
let four = 1;
let five = 1;
let six = 1;
let key = 0;
while ((one < diceRoll) && (two < diceRoll) && (three < diceRoll) && (four < diceRoll) && (five < diceRoll) && (six < diceRoll)) {
    let value = Math.floor((Math.random() * 6) + 1);
    dice[key] = value;
    switch (value) {
        case 1:
            console.log(value + " " + one);
            one++;
            break;
        case 2:
            console.log(value + " " + two);
            two++;
            break;
        case 3:
            console.log(value + " " + three);
            three++;
            break;
        case 4:
            console.log(value + " " + four);
            four++;
            break;
        case 5:
            console.log(value + " " + five);
            five++;
            break;
        case 6:
            console.log(value + " " + six);
            six++;
            break;
    }
    key++;
}
console.log("Total count :")
console.log(one, two, three, four, five, six);
if (one == diceRoll) {
    console.log("1 has maximum count.");
} else if (two == diceRoll) {
    console.log("2 has maximum count.");
} else if (three == diceRoll) {
    console.log("3 has maximum count.");
} else if (four == diceRoll) {
    console.log("4 has maximum count.");
} else if (five == diceRoll) {
    console.log("5 has maximum count.");
} else {
    console.log("6 has maximum count.");
}
if ((one < two) && (one < three) && (one < four) && (one < five) && (one < six)) {
    console.log("1 has minimum count.");
} else if ((two < one) && (two < three) && (two < four) && (two < five) && (two < six)) {
    console.log("2 has minimum count.");
} else if ((three < one) && (three < two) && (three < four) && (three < five) && (three < six)) {
    console.log("3 has minimum count.");
} else if ((four < one) && (four < two) && (four < three) && (four < five) && (four < six)) {
    console.log("4 has minimum count.");
} else if ((five < one) && (five < two) && (five < three) && (five < four) && (five < six)) {
    console.log("5 has minimum count.");
} else {
    console.log("6 has minimum count.");
}