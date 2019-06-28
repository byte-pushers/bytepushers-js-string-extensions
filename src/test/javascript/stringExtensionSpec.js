define(['bytepushers'], function (BytePushers) {
    describe("String extension tests:", function () {
        var testStr = "Hello this is one random string";

        describe('String.isAlphanumeric', function () {
            it('can determine if a string only contains both alphabetical and numerical characters', function () {
                var testUnderString = 'Tekken 3';
                var actualResult = testUnderString.isAlphanumeric();
                var expectedResult = true;
                expect(actualResult).toBe(expectedResult);
            });

            it('can determine if a string contains special characters', function () {
                var testUnderString = 'Jack 3 Wins!';
                var actualResult = testUnderString.isAlphanumeric();
                var expectedResult = false;
                expect(actualResult).toBe(expectedResult);
            });

            it('can determine if a string contains special characters', function () {
                var testUnderString = 'P4Ul_ Ph30N1X';
                var actualResult = testUnderString.isAlphanumeric();
                var expectedResult = false;
                expect(actualResult).toBe(expectedResult);
            });
        });
    });
});