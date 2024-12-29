test ("100 dolares son 15782.50 yenes",() =>{
    let result = dollarToYen(100);
    expect(result).toBe(15782.50);
})

test ("100 euros son 104.24 dolares",() =>{
let result = euroToDollar(100);
expect(result).toBe(104.24);
})

test ("100 yesnes son 0.50 libras esterlians",() =>{
let result = YenToPound(100)
expect (result).toBe(0.50);
})
test ("50 euros son 52.12 dolares",() =>{
    let result = euroToDollar(50);
    expect(result).toBe(52.12);
    })