checkNumber = function (number) {
    if (number > 100) {
        return true;
    }
    return false;
};

result = checkNumber(79);
console.log(result);

result = checkNumber(100);
console.log(result);

result = checkNumber(349);
console.log(result);

// The checkNumber function does something


/* Bouncer Brenda will let you in if the current number of people is less than the maximum
number of people and if you are 18 years or older. */

bouncerBrenda = function (maxNumber, currentNumber, age) {
    if (age < 18) {
        response = "This is a club for adults";
    } else if (currentNumber >= maxNumber) {
        response = "It's too busy now, come back later";
    } else {
        response = "Please come in!";
    }
    return response;
};

result = bouncerBrenda(100, 105, 15);
console.log(result);

result = bouncerBrenda(100, 105, 18);
console.log(result);

result = bouncerBrenda(100, 95, 18);
console.log(result);

//The bouncerBrenda function produces something

//calcAverage calculates the average of 5 numbers

calcAverage = function (number1, number2, number3, number4, number5) {

    calcTotal = (number1 + number2 + number3 + number4 + number5);
    resultAverage = Math.round(calcTotal / 5);
    return resultAverage;
};

result = calcAverage(1, 2, 3, 4, 5);
console.log(result);

result = calcAverage(3, 145, 6, 78, 945);
console.log(result);

//The calcAverage function produces something