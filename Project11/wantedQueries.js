var pageObject = {}

//This test will work in all fields that require an entry that does not accept digits
var testInputsChar = (browser, field, lower, upper, error1, error2) => {
    browser
        //start by checking a null value
        .setValue('@lpExp', '11111111')
        .click ('@save')
        .expect.element('@res').text.to.contain(error1)
        browser
        .click('@clear')
        //test under lower bound
        for (let x = 0; x < lower - 1; x++) {
            browser
                .setValue(field, 'm')
        }
        browser
        .click('@save')
        .verify.containsText('@res', error2)
        .click('@clear')
        //test lower bound
        for (let x = 0; x < lower; x++) {
            browser
                .setValue(field, 'm')
        }
        browser
            .expect.element('@res').text.not.to.contain(error2)
        browser
            .click('@clear')
        //test upper bound
        for (let x = 0; x < upper; x++) {
            browser
                .setValue(field, 'm')
        }
        browser
            .expect.element('@res').text.not.to.contain(error2)
        browser
            .click('@clear')
        //tests above upper bound for error
        for (let x = 0; x <= upper; x++) {
            browser
            .setValue(field, 'm')
        }
        browser
            .click('@save')
            .verify.containsText('@res', error2)
            .click('@clear')
}

//special case for weight and Driver's license, that allow 1 character entries
var testInputsDigitSpecial = (browser, field, upper, error1, error2) => {
    browser
        //start by checking a null value
        .setValue('@lpExp', '11111111')
        .click('@save')
        .expect.element('@res').text.to.contain(error1)
    browser
        .click('@clear')
    //test lower bound
        .setValue(field, '1')
        .click('@save')
        .expect.element('@res').text.not.to.contain(error2)
        browser
        .click('@clear')
    //test upper bound
    for (let x = 0; x < upper; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .expect.element('@res').text.not.to.contain(error2)
    browser
        .click('@clear')
    //tests above upper bound for error
    for (let x = 0; x <= upper; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error2)
        .click('@clear')
}

//This test will work in all fields that require an entry that does not accept alpha characters
var testInputsDigit = (browser, field, lower, upper, error1, error2) => {
    browser
        //start by checking a null value
        .setValue('@lpExp', '11111111')
        .click('@save')
        .expect.element('@res').text.to.contain(error1)
    browser
        .click('@clear')
    //test under lower bound
    for (let x = 0; x < lower - 1; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error2)
        .click('@clear')
    //test lower bound
    for (let x = 0; x < lower; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .expect.element('@res').text.not.to.contain(error2)
    browser
        .click('@clear')
    //test upper bound
    for (let x = 0; x < upper; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .expect.element('@res').text.not.to.contain(error2)
    browser
        .click('@clear')
    //tests above upper bound for error
    for (let x = 0; x <= upper; x++) {
        browser
            .setValue(field, '1')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error2)
        .click('@clear')
}

var testInputsCharOptional = (browser, field, lower, upper, error) => {
    browser
        //We will not test a null value, as these fields are optional and a null value wouldn't return an error
    //test under lower bound
    for (let x = 0; x < lower - 1; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error)
        .click('@clear')
    //test lower bound
    for (let x = 0; x < lower; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .expect.element('@res').text.not.to.contain(error)
    browser
        .click('@clear')
    //test upper bound
    for (let x = 0; x < upper; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .expect.element('@res').text.not.to.contain(error)
    browser
        .click('@clear')
    //tests above upper bound for error
    for (let x = 0; x <= upper; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error)
        .click('@clear')
}
//This is literally only for testing Driver's License, since it has no lower input
var testInputsCharOptionalSpecial = (browser, field, upper, error) => {
    browser
    //We will not test a null value, as these fields are optional and a null value wouldn't return an error
    //Nor will the test test under the minimum value, because that would be a null field
    //test lower bound
    browser
        .setValue(field, 'm')
        .expect.element('@res').text.not.to.contain(error)
    browser
        .click('@clear')
    //test upper bound
    for (let x = 0; x < upper; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .expect.element('@res').text.not.to.contain(error)
    browser
        .click('@clear')
    //tests above upper bound for error
    for (let x = 0; x <= upper; x++) {
        browser
            .setValue(field, 'm')
    }
    browser
        .click('@save')
        .verify.containsText('@res', error)
        .click('@clear')
}

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.wantedPage()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Boundary Tester Required Fields': browser => {
        //to preface this I'm not testing Race or Sex, because how do you boundary test those
        //I'm also not testing the dates
    pageObject
    //Test header, between 9 and 19 characters, all any
        testInputsChar(pageObject, '@header', 9, 19, 'The "Header" field must be included.', 'The "Header" field should be between 9 and 19 characters long.')
        //testInputsDigit(pageObject, '@header', 9, 19, 'The "Header" field must be included.', 'The "Header" field should be between 9 and 19 characters long.')
    //test MKE, between 2 and 4 characters, alphanumeric
        testInputsChar(pageObject, '@mke', 2, 4, 'The "MKE" field must be included.', 'The "MKE" field should be between 2 and 4 characters long.')
        //testInputsDigit(pageObject, '@mke', 2, 4, 'The "MKE" field must be included.', 'The "MKE" field should be between 2 and 4 characters long.')
    //test OAI, exactly 9 alphanumeric characters
        testInputsChar(pageObject, '@oai', 9, 9, 'The "Originating Agency Identifier" field must be included.', 'The "Originating Agency Identifier" field should be 9 characters long.')
        //testInputsDigit(pageObject, '@oai', 9, 9, 'The "Originating Agency Identifier" field must be included.', 'The "Originating Agency Identifier" field should be 9 characters long.')
    //test Name, between 3 and 30 characters, any all
        testInputsChar(pageObject, '@name', 3, 30, 'The "Height" field must be included.', 'The "Name" field should be between 3 and 30 characters long.')
    //test height, exactly 3 characters long
        testInputsDigit(pageObject, '@height', 3, 3, 'The "Name" field must be included.', 'The "Height" field should be 3 characters long.')
    //test weight, betwixt 1 and 3 characters long, becuase 1 is the lower bound, use testInputDigitSpecial
        testInputsDigitSpecial(pageObject, '@weight', 3, 'The "Weight" field must be included.', 'The "Weight" field should be between 1 and 3 characters long.')
    //test hair, between 3 and 10 characters long
        testInputsChar(pageObject, '@hair', 3, 10, 'The "Hair" field must be included.', 'The "Hair" field should be between 3 and 10 characters long.')
    //test offense, between 5 and 15 characters long
        testInputsChar(pageObject, '@offense', 5, 15, 'The "Offense" field must be included.', 'The "Offense" field should be between 5 and 15 characters long.')
    
    },

    'Boundary Test Optional Fields': browser => {
    pageObject
        //test Driver's License, between 1 and 20 characters, it is a special case gdi
        testInputsCharOptionalSpecial(pageObject, '@ls', 20, 'The "Drivers License" field should be between 1 and 20 characters long.')
        //test DL state, exactly 2 characters long
            testInputsCharOptional(pageObject, '@lsState', 2, 2, 'The "DL State" field should be 2 characters long.')
        //test lp, between 5 and 8 characters
            testInputsCharOptional(pageObject, '@lp', 5, 8, 'The "License Plate" field should be between 5 and 8 characters long.')
        //test lp state, exactly 2 characters long
            testInputsCharOptional(pageObject, '@lpState', 2, 2, 'The "License State" field should be 2 characters long.')

    }
}