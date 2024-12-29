function dollarToYen(dollars) {
    let result = dollars * 157.82;
    return result
}
function euroToDollar(euro) {
    let result = euro * 1.04;
    return result
}

function yenToPound(yen) {
    let result = yen * 0.0050
    return result
}

module.exports = { dollarToYen, euroToDollar, yenToPound }