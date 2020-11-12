//I intend to test 45 different options for this page today,
//I will be changing Loan type, Property type, and Primary/Rental/Secondary home

var pageObject = {}
var testMaterial = require('../testAssets/wizardArray')

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.wizardPage()
        pageObject.navigate()
    },
    after: browser => {
        pageObject.end()
    },

    'test 45 different combos': browser => {
        pageObject
        testMaterial.forEach(test => {
            pageObject
                //Custom command to get to the last page
                .runThrough(test)
                //A bunch of If ElseIf statements that should return who the correct contact is
                .resultCheck(test)
            //note, none of the names really work so it is checking for
            //'Thank you for choosing Home Loan Wizard.'
            pageObject
                //click home
                .click('@homeBtn')
        })
    },

}
