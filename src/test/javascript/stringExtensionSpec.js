define(['bytepushers'], function (BytePushers) {
    describe("String extension tests:", function () {

        var testStr = "Hello this is a random string";

        describe('String.prototype.trim', function () {
            it('will trim whitespace correctly', function () {
                var result = " happytime".trim();

                expect(result).toBe("happytime");
            });
            it("Will Not Trim in Front of a String", function () {
                var frontTrimTest = "ABC";
                var expectedResult = " ABC";
                var actualResult = frontTrimTest.trim();

                expect(expectedResult).not.toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Trim in Front of a String", function () {
                var frontTrimTest = " ABC";
                var expectedResult = "ABC";
                var actualResult = frontTrimTest.trim();

                expect(expectedResult).toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Not Trim", function () {
                var noSpaceTrimTest = " ABC ";
                var expectedResult = "ABC";
                var actualResult = noSpaceTrimTest.trim();
                expect(actualResult).toBe(expectedResult);

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

            it('does this string include play', function () {
                var result = testStr.includes("play");

                expect(result).toBe(true);
            });

            it('Does the string include a space', function () {
                var result = testStr.includes(" ");

                expect(result).toBe(false);
            });

            it("", function () {
                var result = testStr.includes("");

                expect(result).toBe(true);

            });

            describe('String.prototype.toCamelCase', function () {
                it('can format a sentence into camel case', function () {
                    var result = "Hello this is a sentence.".toCamelCase();

                    expect(result).toBe("helloThisIsASentence.");
                });
            });

            describe('String.prototype.toNormalCase', function () {
                it('can format a sentence into camel case', function () {
                    var result = "Hello world".toCamelCase().toNormalCase();
                    // helloWorld => "Hello World"
                    expect(result).toBe("Hello World");
                });


                it('can format a sentence into camel case with a single letter word', function () {
                    var result = "Hello this is a sentence".toCamelCase().toNormalCase();
                    // Would think it would do this
                    // Hello this is a sentence => helloThisIsASentence => Hello This Is A Sentence
                    // Actually does this
                    // Hello this is a sentence => helloThisIsASentence => Hello This Is ASentence
                    expect(result).toBe("Hello This Is A Sentence");
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
});
});