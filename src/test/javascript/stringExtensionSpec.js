define(['bytepushers'], function (BytePushers) {
    describe("String extension tests:", function () {
        var testStr = "Hello this is a random string";

        describe('String.prototype.trim', function () {
            it('will trim whitespace correctly', function () {
                var result = " happytime".trim();

                expect(result).toBe("happytime");
            });
            it("Will Not Trim in Front of a String", function () {
                var stringUnderTest = "ABC";
                var expectedResult = " ABC";
                var actualResult = stringUnderTest.trim();

                expect(expectedResult).not.toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Trim in Front of a String", function () {
                var stringUnderTest = " ABC";
                var expectedResult = "ABC";
                var actualResult = stringUnderTest.trim();

                expect(expectedResult).toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Not Trim", function () {
                var stringUnderTest = " ABC ";
                var expectedResult = "ABC";
                var actualResult = stringUnderTest.trim();
                expect(actualResult).toBe(expectedResult);

            });
        });

        describe('String.prototype.includes', function () {
            it('can tell if a string includes a string', function () {
                var result = testStr.includes("o this i");

                expect(result).toBe(true);
            });

            it('can tell if a string does not include a string', function () {
                var stringUnderTest = "Hello my name is Trevor";
                var expectedResult = " ";
                var actualResult = stringUnderTest.includes();
                expect(expectedResult).not.toBe(actualResult);
            });

            it('Does this string include a the word powerball', function () {
                var stringUnderTest = "I would love to win the powerball";
                var actualResult = stringUnderTest.includes("I would love to win the powerball");
                var expectedResult = "I would love to win the megamillions";
                expect(actualResult).not.toBe(expectedResult);
            });

            it('This string will not include the word apple', function () {
                var stringUnderTest = "I have lots of pears";
                var actualResult = stringUnderTest.includes("I have lots of pears");
                var expectedResult = "I have lots of apples";
                expect(actualResult).not.toBe(expectedResult);
            });
        });

        describe('String.format', function () {
            it('can format a string properly', function () {
                var result = String.format("Hello {1} is {2} random {3}", "this", "a", "string");

                expect(result).toBe(testStr); // testStr = "Hello this is a random string";
            });
        });
    });

});