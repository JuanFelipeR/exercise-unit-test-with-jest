const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Euro to Dollar Function
const fromEuroToDollar = function (euroAmount) {
    return euroAmount * oneEuroIs.USD
}

console.log (fromEuroToDollar(3.5));



//Dollar To Yen Function
function fromDollarToYen(dollarAmount) {
    let euros = dollarAmount / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

console.log (fromDollarToYen(1));


// Yen To Pound Function

function fromYenToPound (yenAmount){
    let euros = yenAmount / oneEuroIs.JPY;
    let pound = euros * oneEuroIs.GBP;
    return pound;
}
console.log(fromYenToPound(156.5));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };