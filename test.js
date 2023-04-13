const { add, subtract, multiply, addWith3Numbers } = require('./testing');

describe("Arithmatic", () => {
    test('Adding two numbers', (done) => {
        expect(add(3,7)).toStrictEqual(10)
        expect(add(100, 200)).toStrictEqual(300)
        done()
    })
    
    test('Subtracting two numbers', (done) => {
        expect(subtract(10, 10)).toStrictEqual(0)
        expect(subtract(200, 100)).toStrictEqual(100)
        done()
    })
    
    test('Multiplying two numbers', (done) => {
        expect(multiply(10, 10)).toStrictEqual(100)
        expect(multiply(200, 100)).toStrictEqual(20000)
        done()
    })

    test('Add with 3 Numbers', (done) => {
        expect(addWith3Numbers(1,2,4)).toStrictEqual(7);
        expect(addWith3Numbers(4,4,4)).toStrictEqual(12);
        done()
    })

})