define(['bytepushers'], function (BytePushers) {
    describe("String extension tests:", function () {

        var testStr = "Hello this is one random string";





        // describe('String.isAlphabetical', function () {
        //   it('will organize alphabet in order and remove other characters', function () {
        //     var str = 'ac4bbbBB233defb';


        //    return str.replace(/[0-9]/g, '').split('').sort().join('');

        //expected result: BBabbbbcdef
        //  });

        // it('will organize alphabet in order and remove other characters from sentence', function () {
        //   var str = 'S33 Y0u Sp4ce Cowb0y';


        //  return str.replace(/[0-9]/g, '').split('').sort().join('');

        //expected result: CSSYbceopuwy
        //  });

        // it('will remove any and all capital letters and organize afterwards', function () {
        //    var str = 'COwBOY BeBOP';


        //  return str.replace(/[0-9]/g, '').split('').sort().join('');

        //expected result: BBCOOOPew
        //   });

        //   });

        //NEW REVISED CODE GOES HERE

        describe('String.isAlphabetical', function () {
            it('can determine if a string only contains alphabetical characters', function () {
                var testUnderString = 'Street Fighter II';
                var actualResult = testUnderString.isAlphabetical();
                var expectedResult = true;
                expect(actualResult).toBe(expectedResult);
            });

            it('can determine if numbers in sentence are considered part of alphabet', function () {
                var testUnderString = '60 seconds';
                var actualResult = testUnderString.isAlphabetical();
                var expectedResult = false;
                expect(actualResult).toBe(expectedResult);
            })

            it('can determine if special characters are included in sentence', function () {
                var testUnderString = 'KO! Chun Li Wins!';
                var actualResult = testUnderString.isAlphabetical();
                var expectedResult = false;
                expect(actualResult).toBe(expectedResult);
            })
        });






        });

});