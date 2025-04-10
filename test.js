const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23',() => {

    let total = sum (14,9);

    expect(total).toBe (23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

const { fromDollarToYen } = require('./app.js');

test("One dollar should be converted to yens correctly", () => {
    const amount = 1;
    const result = fromDollarToYen(amount);
    const expected = (amount/1.07)*156.5
    expect(result).toBeCloseTo(expected);
});

const { fromYenToPound } = require('./app.js');

test("One yens should be converted to pound correctly", () => {
    const amount = 1;
    const result = fromYenToPound(amount);
    const expected = (amount/156.5)*0.87
    expect(result).toBeCloseTo(expected);
});