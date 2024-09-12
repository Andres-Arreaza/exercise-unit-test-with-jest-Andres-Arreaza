// Importar la funciciones del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

describe("Pruebas de Converciones", () =>{
    test(" 1 Euro tiene un valor en dolares de 1.07", () =>{
        let resultado = fromEuroToDollar(1)
        let dollar = 1 * oneEuroIs.USD
        expect(resultado).toBe(dollar)
    })

    test(" 1 dollar tiene un valor en Yen de 146.26168224299064", () =>{
        let euros = 1 / oneEuroIs.USD
        let yenes = euros * oneEuroIs.JPY
        let resultado = fromDollarToYen(1)
        expect(resultado).toBe(yenes)
    })
    
    test(" 1 Euro tiene un valor en dolares de 0.0055591054313099035", () =>{
        let euros=1/oneEuroIs.JPY
        let libras = euros * oneEuroIs.GBP
        let resultado=fromYenToPound(1)
        expect(resultado).toBe(libras)
    })
})


