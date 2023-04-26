const { Triangle, Circle, Square } = require('./shapes');

describe('Shape tests', () => {
    test('Triangle renders with the set color', () => {
        const testTriangle = new Triangle();
        testTriangle.setColor('blue')
        expect(testTriangle.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="blue" />`)
    })

    test('Circle renders with the set color', () => {
        const testCircle = new Circle();
        testCircle.setColor('blue')
        expect(testCircle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
    })

    test('Square renders with the set color', () => {
        const testSquare = new Square();
        testSquare.setColor('blue')
        expect(testSquare.render()).toEqual(`<rect x="70" y="25" width="160" height="160" fill="blue" />`)
    })
});