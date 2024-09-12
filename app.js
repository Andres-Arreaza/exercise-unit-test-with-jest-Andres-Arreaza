// Objeto donde One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

const fromDollarToYen = (dolares) => {
    let euros = dolares / oneEuroIs.USD;
    let yen = euros * oneEuroIs.JPY;
    return yen;
}

const fromYenToPound = (yenes) => {
    let euros = yenes / oneEuroIs.JPY;
    let libra = euros * oneEuroIs.GBP;
    return libra;
}


module.exports={
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
    oneEuroIs
}