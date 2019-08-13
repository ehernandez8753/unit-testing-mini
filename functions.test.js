const functions = require("./functions.js");

test("returnTwo should return 2", () => {
    expect(functions.returnTwo()).toBe(2);
});

test("greeting should return a greeting using param name", () => {
    expect(functions.greeting("Stan")).toBe("Hello, Stan.")
    expect(functions.greeting("James")).toBe("Hello, James.")
});

describe("Math Functions", () => {

    test("add should add two values together", () => {
        expect(functions.add(1,3)).toBe(4)
        expect(functions.add(4,5)).toBe(9)
    });
    
    test("subtract should subtract two values together", () => {
        expect(functions.subtract(5,3)).toBe(2)
        expect(functions.subtract(2,5)).toBe(-3)
    });
    
    test("multiply should multiply two values together", () => {
        expect(functions.multiply(1,3)).toBe(3)
        expect(functions.multiply(4,5)).toBe(20)
    });
    
    test("divide should divide two values together", () => {
        expect(functions.divide(12,3)).toBe(4)
        expect(functions.divide(100, 25)).toBe(4)
    });

});

