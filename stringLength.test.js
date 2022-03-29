const stringLength = require('./stringLength');

it("It should test if number of string is greater than 0 and less than 11", () => {
    expect(stringLength("string")).toBe(6);
});

it("string length out of bound", () => {
    expect(() =>stringLength("myString-11")).toThrow('length is out of range (1-10)');
    expect(() =>stringLength("")).toThrow('length is out of range (1-10)');  
});