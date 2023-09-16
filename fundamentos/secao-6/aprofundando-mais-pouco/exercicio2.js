const checkNumber = (item) => { 
    if (typeof item !== 'number') {
        throw new Error('É necessário digitar um número!!!');
    }
}

function VerifyNumber (num1,num2,num3,num4) {
    try {
        const arrayNumbers = [num1, num2, num3, num4]
        for (let index = 0; index < 4; index += 1) {
            checkNumber(arrayNumbers[index]);
        }

        let average = (num1 + num2 + num3 + num4) / 4;
        return average

    } catch(error) {
        return error.message;
    }

}

console.log(VerifyNumber(1,2,3,4));