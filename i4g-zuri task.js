let f

function convertFahrToCelsius(f = 9) {
    let parameter = f;
    let paramType = typeof(f);
    if (isNaN(f)) {

        return `${parameter} is not a valid number but a / an  ${paramType}`

    } else {
        var c = ((f - 32) * (5 / 9))
        return c.toFixed(4)

    }


}

console.log(convertFahrToCelsius())