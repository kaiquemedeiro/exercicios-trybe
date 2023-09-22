const numbers = [4, 9, -1, 16, -5, 25];

const newArray = numbers.map((number) => {
    if (number < 0) {return NaN};
    return number ** 2;
});

console.log(newArray);