var originalData = require('../testAssets/employeePracticeEmployeeArray')
var pageObject = {}

module.exports = {
    
    beforeEach: browser => {
        pageObject = browser.page.employeePracticePage()
        .navigate()
        .maximizeWindow()
    },
    after: browser => {
        pageObject.end()
    },
    'Bring Back the Old Data': browser => {
        pageObject
            .convertToOriginal(originalData)
    }
    /* ,

    'addManyEmployees': browser => {
        browser
        .pause(5000)
        for (var x = 0; x <= 15; x++) {
        browser
            //.click('li[name="addEmployee"]')
            .useXpath()
            .click('//li[contains(text()," + Add Employee ")]')
            .pause(1000)
         }
        browser
         .pause(1000)
    }
    */
}