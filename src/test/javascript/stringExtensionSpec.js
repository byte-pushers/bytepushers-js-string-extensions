define(['bytepushers'], function(BytePushers) {
    describe("String extension tests:", function () {
        var testStr = "Hello this is a random string";

        describe('String.prototype.trim', function () {
            it('will trim whitespace correctly', function () {
                var result = "                       l     shdasdk;lg;al j          ".trim();

                expect(result).toBe("l     shdasdk;lg;al j");
            });
        });

        describe('String.prototype.includes', function () {
            it('can tell if a string includes a string', function () {
                var result = testStr.includes("o this i");

                expect(result).toBe(true);
            });

            it('can tell if a string does not include a string', function () {
                var result = testStr.includes("This is not in the string");

                expect(result).toBe(false);
            });
        });

        describe('String.prototype.toNormalCase', function () {
            it('can format a sentence into camel case', function () {
                var result = "Hello world".toCamelCase().toNormalCase();
                // helloWorld => "Hello World"
                expect(result).toBe("Hello World");
            });

            it('can format a sentence from camelCase to normal case', function () {
                var stringUnderTest = "HelloBytePushersLetsGoToWork.".toCamelCase();
                var actualResult = stringUnderTest.toNormalCase();
                var expectedResult = "Hello Byte Pushers Lets Go To Work.";
                expect(actualResult).toBe(expectedResult);

            });

            it('can format a sentence  that is expected not to be from normalCase to normalCase', function () {
                var stringUnderTest = "Hello everyone look at the my string and its letter case.".toNormalCase();
                var actualResult = stringUnderTest.toNormalCase();
                var expectedResult = "Hello everyone look at the my string and its letter case".toCamelCase();
                expect(expectedResult).not.toBe(actualResult);

            });

            it('can format a sentence from camelCase with a single letter word', function () {
                var stringUnderTest = "Hello captain falcon".toCamelCase();
                var actualResult = stringUnderTest.toNormalCase();
                var expectedResult = "Hello Captain Falcon";
                expect(actualResult).toBe(expectedResult);

            });

            describe('String.format', function () {
                it('can format a string properly', function () {
                    var result = String.format("Hello {1} is {2} random {3}", "this", "a", "string");

                    expect(result).toBe(testStr); // testStr = "Hello this is a random string";
                });
            });
        });
    });

});


