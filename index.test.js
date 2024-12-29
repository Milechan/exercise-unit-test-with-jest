const tasaCambio = require("./index");


test("100 dolares son 15782.50 yenes", () => {
    let result = tasaCambio.dollarToYen(100);
    expect(result).toBe(15782);
})

test("100 euros son 104.24 dolares", () => {
    let result = tasaCambio.euroToDollar(100);
    expect(result).toBe(104);
})

test("100 yesnes son 0.50 libras esterlians", () => {
    let result = tasaCambio.yenToPound(100)
    expect(result).toBe(0.50);
})
test("50 euros son 52.12 dolares", () => {
    let result = tasaCambio.euroToDollar(50);
    expect(result).toBe(52);
})