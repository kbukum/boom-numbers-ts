import Boom from "app/Boom";
import { expect } from "chai";

describe("app/Boom", () => {
    it("constructor", () => {
        let props = {
            min: 0,
            max: Math.pow(10, 7),
            s1: "2",
            s2: "3"
        };
        let boom = new Boom(props);
        expect(boom.getProps()).to.be.deep.eq(props);
    });

    it("find", () => {
        let props = {
            min: 0,
            max: Math.pow(10, 7),
            s1: "2",
            s2: "3"
        };
        let boom = new Boom(props);
        let expectedResult = "322323";
        let result = boom.find(100);
        expect(result).to.be.deep.eq(expectedResult);

        expectedResult = "3332322223223222223";
        result = boom.find(1000000);
        expect(result).to.be.deep.eq(expectedResult);
    });

    it("replaceAll(static)", () => {
        let value = "test";
        let result = Boom.replaceAll(value, "t", "b");
        let expectedResult = "besb";
        expect(result).to.be.eq(expectedResult);
    });
});

