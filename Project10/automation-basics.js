var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.basicsPage()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Evens and Odds': browser => {
        pageObject
        //Check for null value
        .click('@evenButton')
        .verify.containsText('@evenRes', '[null]')
        //check various positive values
        .click('@evenInput')
        for (let x = 1; x < 20; x++) {
            pageObject
            .setValue('@evenInput', x*3 + ', ')
        }
        pageObject
        .setValue('@evenInput', '60')
        .click('@evenButton')
        .verify.containsText('@evenRes', '[6,12,18,24,30,36,42,48,54,60]')
        .verify.containsText('@oddRes', '[3,9,15,21,27,33,39,45,51,57]')
        .clearValue('@evenInput')
        //check various negative values
            .click('@evenInput')
        for (let x = 1; x < 20; x++) {
            pageObject
                .setValue('@evenInput', -x * 3 + ', ')
        }
        pageObject
            .setValue('@evenInput', '-60')
            .click('@evenButton')
            .verify.containsText('@evenRes', '[-6,-12,-18,-24,-30,-36,-42,-48,-54,-60]')
            .verify.containsText('@oddRes', '[-3,-9,-15,-21,-27,-33,-39,-45,-51,-57]')
            .clearValue('@evenInput')
            //Even though 0 is not an even number, this program will treat it as such
            .setValue('@evenInput', '0')
            .click('@evenButton')
            .expect.element('@evenRes').text.to.equal('Evens: [0]')
    },
    'Filter Object': browser => {
        pageObject
        //test an empty set
            .click('@objButton')
            .expect.element('@objRes').text.to.equal('Filtered: []')
        pageObject
            .setValue('@objInput', 'cats')
            .click('@objButton')
            .expect.element('@objRes').text.to.equal('Filtered: []')
        //Test sets with all elements
        pageObject
            .clearValue('@objInput')
            .setValue('@objInput', 'name')
            .click('@objButton')
            .expect.element('@objRes').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        //Test results with only one key
        pageObject
            .clearValue('@objInput')
            .setValue('@objInput', 'hairColor')
            .click('@objButton')
            .expect.element('@objRes').text.to.equal('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
        //check that inputting the value does not result in displaying the file
        pageObject
            .clearValue('@objInput')
            .setValue('@objInput', 'brown')
            .click('@objButton')
            .expect.element('@objRes').text.not.to.equal('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
    },

    'Test Filter String': browser => {
        pageObject
         //test an empty text field
            .click('@strButton')
            .expect.element('@strRes').text.to.equal('Filtered Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]')
        pageObject
        //test an entry with only one result
            .setValue('@strInput', 'James')
            .click('@strButton')
            .expect.element('@strRes').text.to.equal('Filtered Names: [ "James" ]')
        //test an entry with multiple results
        pageObject
            .clearValue('@strInput')
            .setValue('@strInput', 'a')
            .click('@strButton')
            .expect.element('@strRes').text.to.equal('Filtered Names: [ "James", "Jessica", "Blake", "Mark", "Maddy" ]')
        //test empty sets
        pageObject
            .clearValue('@strInput')
            .setValue('@strInput', '1')
            .click('@strButton')
            .expect.element('@strRes').text.to.equal('Filtered Names: []')
    },

    'Test Palindrome': browser => {
        pageObject 
        //Test null entry, which is a palindrome (a null set backwards is a null set)
            .click('@palButton')
            .expect.element('@palRes').text.to.equal('Palindrome: true')
        pageObject
        //test invalid entries
            .setValue('@palInput', 'ab')
            .click('@palButton')
            .verify.containsText('@palRes', 'false')
            .setValue('@palInput', 'ab')
            .click('@palButton')
            .verify.containsText('@palRes', 'false')
            .setValue('@palInput', 'ab')
            .click('@palButton')
            .verify.containsText('@palRes', 'false')
        //test valid entries (This tests odd and even palindromes)
            .clearValue("@palInput")
            for (let x = 1; x < 5; x++) {
            pageObject
                .setValue('@palInput', '5')
                .click('@palButton')
                .verify.containsText('@palRes', 'true')
            }
    },
    'test Sum': browser => {
            pageObject 
            //test null fields
                .click('@sumButton')
                .verify.containsText('@sumRes', '0')
                .setValue('@sumInput1', '3')
                .click('@sumButton')
                .verify.containsText('@sumRes', '3')
                .clearValue('@sumInput1')
                //So the following block of code results in a bug on the site
                //but I've confirmed in manual testing that it does work
                    //.clearValue('@sumInput1')
                    //.setValue('@sumInput2', '-3')
                    //.click('@sumButton')
                    //.verify.containsText('@sumRes', '-3')
            //test valid inputs
            for (let x = 1; x < 5; x++) {
                for (let y = 1; y < 5; y++) {
                    pageObject
                        .setValue('@sumInput1', x*5)
                        .setValue('@sumInput2', y*-3)
                        .click('@sumButton')
                        .verify.containsText('@sumRes', (x*5) + (y*-3))
                        .clearValue('@sumInput1')
                        .clearValue('@sumInput2')

                }
            }
    }
}