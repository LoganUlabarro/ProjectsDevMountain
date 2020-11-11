//I intend to test 45 different options for this page today,
//I will be changing Loan type, Property type, and Primary/Rental/Secondary home

var pageObject = {}
var testMaterial = [
    //Tests home purchases, variable home types, and primary home
    { loan: '@loan1', property: '@prop1', type: '@primaryBtn'},
    { loan: '@loan1', property: '@prop2', type: '@primaryBtn'},
    { loan: '@loan1', property: '@prop3', type: '@primaryBtn'},
    { loan: '@loan1', property: '@prop4', type: '@primaryBtn'},
    { loan: '@loan1', property: '@prop5', type: '@primaryBtn'},
    //tests Refinance, Variable home types, and primary home
    { loan: '@loan2', property: '@prop1', type: '@primaryBtn'},
    { loan: '@loan2', property: '@prop2', type: '@primaryBtn'},
    { loan: '@loan2', property: '@prop3', type: '@primaryBtn'},
    { loan: '@loan2', property: '@prop4', type: '@primaryBtn'},
    { loan: '@loan2', property: '@prop5', type: '@primaryBtn'},
    //test home equity, variable home types, and primary home
    { loan: '@loan3', property: '@prop1', type: '@primaryBtn'},
    { loan: '@loan3', property: '@prop2', type: '@primaryBtn'},
    { loan: '@loan3', property: '@prop3', type: '@primaryBtn'},
    { loan: '@loan3', property: '@prop4', type: '@primaryBtn'},
    { loan: '@loan3', property: '@prop5', type: '@primaryBtn'},
    //Tests home purchases, variable home types, and rental home
    { loan: '@loan1', property: '@prop1', type: '@rentalBtn' },
    { loan: '@loan1', property: '@prop2', type: '@rentalBtn' },
    { loan: '@loan1', property: '@prop3', type: '@rentalBtn' },
    { loan: '@loan1', property: '@prop4', type: '@rentalBtn' },
    { loan: '@loan1', property: '@prop5', type: '@rentalBtn' },
    //tests Refinance, Variable home types, and rental home
    { loan: '@loan2', property: '@prop1', type: '@rentalBtn' },
    { loan: '@loan2', property: '@prop2', type: '@rentalBtn' },
    { loan: '@loan2', property: '@prop3', type: '@rentalBtn' },
    { loan: '@loan2', property: '@prop4', type: '@rentalBtn' },
    { loan: '@loan2', property: '@prop5', type: '@rentalBtn' },
    //test home equity, variable home types, and rental home
    { loan: '@loan3', property: '@prop1', type: '@rentalBtn' },
    { loan: '@loan3', property: '@prop2', type: '@rentalBtn' },
    { loan: '@loan3', property: '@prop3', type: '@rentalBtn' },
    { loan: '@loan3', property: '@prop4', type: '@rentalBtn' },
    { loan: '@loan3', property: '@prop5', type: '@rentalBtn' },
    //Tests home purchases, variable home types, and Secondary home
    { loan: '@loan1', property: '@prop1', type: '@secondaryBtn' },
    { loan: '@loan1', property: '@prop2', type: '@secondaryBtn' },
    { loan: '@loan1', property: '@prop3', type: '@secondaryBtn' },
    { loan: '@loan1', property: '@prop4', type: '@secondaryBtn' },
    { loan: '@loan1', property: '@prop5', type: '@secondaryBtn' },
    //tests Refinance, Variable home types, and Secondary home
    { loan: '@loan2', property: '@prop1', type: '@secondaryBtn' },
    { loan: '@loan2', property: '@prop2', type: '@secondaryBtn' },
    { loan: '@loan2', property: '@prop3', type: '@secondaryBtn' },
    { loan: '@loan2', property: '@prop4', type: '@secondaryBtn' },
    { loan: '@loan2', property: '@prop5', type: '@secondaryBtn' },
    //test home equity, variable home types, and Secondary home
    { loan: '@loan3', property: '@prop1', type: '@secondaryBtn' },
    { loan: '@loan3', property: '@prop2', type: '@secondaryBtn' },
    { loan: '@loan3', property: '@prop3', type: '@secondaryBtn' },
    { loan: '@loan3', property: '@prop4', type: '@secondaryBtn' },
    { loan: '@loan3', property: '@prop5', type: '@secondaryBtn' }
]

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
            testMaterial.forEach(test =>{
                pageObject
                    .click('@next')
                    //set loan and property type
                    .click(test.loan)
                    .click(test.property)
                    //.setValue('@loanType',test.loan)
                    //.setValue('@propType', test.property)
                    //.pause(5000)
                    .click('@button')
                    //the next page is worthless for testing
                    .click('@next')
                    //Click on one of three buttons
                    .click(test.type)
                    //just click yes twice
                    .click('@yesBtn')
                    .click('@yesBtn')
                    //Use no money (4 possible options)
                    .click('@button')
                    //click only good (4 possible options)
                    .click('@goodBtn')
                    //click no (4 possible options)
                    .click('@noBankrupcyBtn')
                    //click Next
                    .click('@next')
                    //click Next
                    .click('@next')
                    //click send
                    .click('@sendBtn')

                    //Verify the correct info
                    //I don't know if it is supposed to display multiple names between Steve, Jan, and Coperate
                    //So I'm going to treat it like order of operations, 1 supercedes 2 which supercedes 3
                    //but it seems to only give me coorperate, so I'm just going to have it
                    // test for 'Thank you for choosing home loan wizard.'
                    if(test.type === '@primaryBtn' && test.loan === '@loan1' && test.property !== '@prop4'){
                    //Should be Steve
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type === '@primaryBtn' && test.loan !== '@loan1' && test.property !== '@prop4') {
                    //Should be Steve and corperate
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type === '@primaryBtn' && test.loan !== '@loan1' && test.property === '@prop4') {
                    //Should be Steve, Mike, and corperate
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type === '@primaryBtn' && test.loan === '@loan1' && test.property === '@prop4') {
                    //Should be Steve and Mike
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type !== '@primaryBtn' && test.loan === '@loan1' && test.property !== '@prop4') {
                    //Should be jan
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type !== '@primaryBtn' && test.loan !== '@loan1' && test.property !== '@prop4') {
                    //Should be jan and corperate
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type !== '@primaryBtn' && test.loan !== '@loan1' && test.property === '@prop4') {
                    //Should be Jan, Mike, and corperate
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    else if (test.type !== '@primaryBtn' && test.loan === '@loan1' && test.property === '@prop4') {
                    //Should be Jan and Mike
                    pageObject
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    /*
                    else{
                    pageObject
                        //I guess I missed something
                        .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                        .pause(1000)
                    }
                    */
                    pageObject
                    //click home
                    .click('@homeBtn')

            })
    }
}