const assert = require("chai").assert;
const expect = require("chai").expect;
const greet = require("../app").greet;
const add = require("../app").addNumbers;
const calculator = require("../app").calculator


describe("app", () => {
    describe("calculator", () => {
        describe("returns numbers", () => {
            it("calculator.add() should return a number", () => {
                let result = calculator.add(5,5);
                assert.isNumber(result);
            }),
            it("calculator.substract() should return a number", () => {
                let result = calculator.substract(5,5);
                assert.isNumber(result);
            }),
            it("calculator.divide() should return a number", () => {
                let result = calculator.divide(5,5);
                assert.isNumber(result);
            }),
            it("calculator.add() should return a number", () => {
                let result = calculator.add(5,5);
                assert.isNumber(result);
            })
        }),
        describe("defined outputs", () => {
            it("calculator.multiply() returns a defined output", () => {
                let result = calculator.multiply(5,5);
                assert.isDefined(result);
            }),
            it("calculator.substract() returns a defined output", () => {
                let result = calculator.substract(5,5);
                assert.isDefined(result);
            }),
            it("calculator.divide() returns a defined output", () => {
                let result = calculator.divide(5,5);
                assert.isDefined(result);
            }),
            it("calculator.multiply() returns a defined output", () => {
                let result = calculator.multiply(5,5);
                assert.isDefined(result);
            })

        describe("error", () => {
            it("add() returns error for string arguments", () => {
                let result = calculator.add("a", "b")
                assert.equal(result, "error")
            }),
            it("substract() returns error for string arguments", () => {
                let result = calculator.substract("a", "b")
                assert.equal(result, "error")
            }),
            it("divide() returns error for string arguments", () => {
                let result = calculator.divide("a", "b")
                assert.equal(result, "error")
            }),
            it("multiply() returns error for string arguments", () => {
                let result = calculator.multiply("a", "b")
                assert.equal(result, "error")
            })
        })

        })
        
    })
})