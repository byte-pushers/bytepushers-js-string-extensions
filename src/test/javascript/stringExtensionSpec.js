define(['bytepushers'], function(BytePushers) {
    describe("String extension tests:", function() {

        var testStr = "Hello this is a random string";

        describe('String.prototype.trim', function () {
            it('will trim whitespace correctly', function() {
                var result = "                       l     shdasdk;lg;al j          ".trim();

                expect(result).toBe("l     shdasdk;lg;al j");
            });
            it("Will Not Trim in Front of a String", function() {
                var stringUnderTest = "ABC";
                var expectedResult = " ABC";
                var actualResult = stringUnderTest.trim();

                expect(expectedResult).not.toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Trim in Front of a String", function() {
                var stringUnderTest = " ABC";
                var expectedResult = "ABC";
                var actualResult = stringUnderTest.trim();

                expect(expectedResult).toBe(actualResult);
                //expect(false).not.toBe(true);
            });

            it("Will Not Trim", function() {
                var stringUnderTest = " ABC ";
                var expectedResult = "ABC";
                var actualResult = stringUnderTest.trim();
                expect(actualResult).toBe(expectedResult);

            });

            it('trim white space before and after string but not space between letters', function() {
                var stringUnderTest = " a b c ";
                var expectedResult = "a b c";
                var actualResult = stringUnderTest.trim();

                expect(actualResult).toBe(expectedResult);
            });

            it('trim white space before and after string but not space between words', function() {
                var stringUnderTest = " Donkey Kong ";
                var expectedResult = "Donkey Kong";
                var actualResult = stringUnderTest.trim();

                expect(actualResult).toBe(expectedResult);
            });

            it('trim white space after string but not space between words', function() {
                var stringUnderTest = "Duck Hunt ";
                var expectedResult = "Duck Hunt";
                var actualResult = stringUnderTest.trim();

                expect(actualResult).toBe(expectedResult);
            });

            it('white space will not be trimmed if there is no white space', function() {
                var stringUnderTest = "Ness";
                var expectedResult = "Ness";
                var actualResult = stringUnderTest.trim();

                expect(actualResult).toBe(expectedResult);
            });

        });

        describe('String.prototype.includes', function () {
            it('can tell if a string includes a string', function() {
                var result = testStr.includes("o this i");

                expect(result).toBe(true);
            });

            it('can tell if a string does not include a string', function() {
                var result = testStr.includes("This is not in the string");

                expect(result).toBe(false);
            });
        });

        describe('String.prototype.toCamelCase', function () {
            it('can format a sentence into camel case', function() {
                var result = "Hello this is a sentence.".toCamelCase();

                expect(result).toBe("helloThisIsASentence.");
            });
        });

        describe('String.prototype.toNormalCase', function () {
            it('can format a sentence into camel case', function() {
                var result = "Hello world".toCamelCase().toNormalCase();
                // helloWorld => "Hello World"
                expect(result).toBe("Hello World");
            });

            it('can format a sentence into camel case with a single letter word', function() {
                var result = "Hello this is a sentence".toCamelCase().toNormalCase();
                // Would think it would do this
                // Hello this is a sentence => helloThisIsASentence => Hello This Is A Sentence
                // Actually does this
                // Hello this is a sentence => helloThisIsASentence => Hello This Is ASentence
                expect(result).toBe("Hello This Is A Sentence");
            });
        });

        describe('String.format', function () {
            it('can format a string properly', function() {
                var result = String.format("Hello {1} is {2} random {3}", "this", "a", "string");

                expect(result).toBe(testStr);  //testStr = "Hello this is a random string";
            });

            it('can format a string properly with punctuation', function() {
                var result = String.format("Hello {1}  name {2}  Tonegawa, {3} to {4} you {5}", "my", "is", "nice", "to");

                expect(result).toBe(testStr);  testStr = "Hello my name is Tonegawa, nice to meet you";
            });

            it('can format a string using specific one number', function() {
                var result = String.format(" random {3}", "This is", "a", "string");

                expect(result).toBe(testStr);  testStr = "This is a random string";
            });

            it('can format a string to different parts of the string', function() {
                var result = String.format("Hello {1} random {3}", "there", "stranger");

                expect(result).toBe(testStr);  testStr = "Hello there random stranger";
            });

            it('will not display blank assigned roles', function() {
                var result = String.format("{1} {2} {3}", "I", "like", "pizza");

                expect(result).toBe(testStr);  testStr = "I like pizza";
            });

            it('will only display assigned roles', function() {
                var result = String.format("This {1} is {2} spicy {3}");

                expect(result).toBe(testStr);
                testStr = "This is spicy";
            });

            it('can format two dynamic variables into template.', function() {
                var templateUnderTest = "I'm a {1} web {2}.";
                var expectedResult = "I'm a powerful web developer.";
                var actualResult = String.format(templateUnderTest, "powerful", "developer");
                expect(actualResult).toBe(expectedResult); // testStr = "I'm a powerful web developer";
            });
            it('can format with three dynamic variables into template.', function() {
                var templateUnderTest = "The customer name is {1} and lives in {2} and his member number is {3}.";
                var expectedResult = "The customer name is Rambo and lives in 80's and his member number is First Blood.";
                var actualResult = String.format(templateUnderTest, "Rambo", "80's", "First Blood");
                expect(actualResult).toBe(expectedResult); // testStr = "The customer name is Rambo and lives in 80's and his member number is First Blood.";
            });

            it('can format with no dynamic variables into template.', function() {
                var templateUnderTest = "I'm a powerful web developer.";
                var expectedResult = "I'm a powerful web developer.";
                var actualResult = String.format(templateUnderTest, "I'm a powerful web developer.");
                expect(actualResult).toBe(expectedResult); // testStr = "I'm a powerful web developer";

            });
            it('can format one dynamic variables into template.', function() {
                var templateUnderTest = "To {1} or not to be.";
                var expectedResult = "To be or not to be.";
                var actualResult = String.format(templateUnderTest, "be");
                expect(actualResult).toBe(expectedResult); // testStr = "To be or not to be.";
            });

        });
    });
});