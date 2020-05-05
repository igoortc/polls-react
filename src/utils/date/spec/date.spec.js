import { sanitizeDate } from "../index";

describe("Sanitize date", () => {
    const exampleDate = "2020-05-05T15:53:36.113431+00:00"
    it("should return full date", () => {
        expect(sanitizeDate(exampleDate)).toEqual("5/5/2020 at 5:53 PM");
        expect(sanitizeDate(exampleDate, { date: true, time: true})).toEqual("5/5/2020 at 5:53 PM");
    });

    it("should return only date", () => {
        expect(sanitizeDate(exampleDate, { date: true })).toEqual("5/5/2020");
    });

    it("should return only time", () => {
        expect(sanitizeDate(exampleDate, { time: true })).toEqual("5:53 PM");
    });
});
