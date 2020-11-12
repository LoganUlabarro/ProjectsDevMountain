var customCommands = {
    runThrough: function (test) {
        this
            //starting page
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
            return this
    },
    resultCheck: function (test){
        this
        if (test.type === '@primaryBtn' && test.loan === '@loan1' && test.property !== '@prop4') {
            //Should be Steve
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type === '@primaryBtn' && test.loan !== '@loan1' && test.property !== '@prop4') {
            //Should be Steve and corperate
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type === '@primaryBtn' && test.loan !== '@loan1' && test.property === '@prop4') {
            //Should be Steve, Mike, and corperate
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type === '@primaryBtn' && test.loan === '@loan1' && test.property === '@prop4') {
            //Should be Steve and Mike
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type !== '@primaryBtn' && test.loan === '@loan1' && test.property !== '@prop4') {
            //Should be jan
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type !== '@primaryBtn' && test.loan !== '@loan1' && test.property !== '@prop4') {
            //Should be jan and corperate
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type !== '@primaryBtn' && test.loan !== '@loan1' && test.property === '@prop4') {
            //Should be Jan, Mike, and corperate
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else if (test.type !== '@primaryBtn' && test.loan === '@loan1' && test.property === '@prop4') {
            //Should be Jan and Mike
            this
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
        else {
            this
                //I guess I missed something
                .verify.containsText('@results', 'Thank you for choosing Home Loan Wizard.')
                .pause(100)
        }
    }
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [customCommands],
    elements: {
        next: 'button[name="nextButton"]',
        button: 'button',
        nothing: '.parent-div',
        loan1: 'select[id="loanTypes"] option[value = "Home Purchase"]',
        loan2: 'select[id="loanTypes"] option[value="Refinance"]',
        loan3: 'select[id="loanTypes"] option[value="Home Equity"]',
        //Default Home Purchases, R, H
        loanType: '#loanTypes',
        //Default Single, T, C, M, Mo
        prop1: 'select[id="propertyTypes"] option[value = "Single Family Home"]',
        prop2: 'select[id="propertyTypes"] option[value = "Town Home"]',
        prop3: 'select[id="propertyTypes"] option[value = "Condo"]',
        prop4: 'select[id="propertyTypes"] option[value = "Multi Family Dwelling"]',
        prop5: 'select[id="propertyTypes"] option[value = "Mobile Home"]',
        propType: '#propertyType',
        //next button
        primaryBtn: 'button[value="Primary Home"]',
        rentalBtn: 'button[value = "Rental Property"]',
        secondaryBtn: 'button[value="Secondary Home"]',
        //next page
        yesBtn: 'button[name="yesButton"]',
        noBtn: 'button[name="noButton"]',
        //next page
        //repeat Yes and No
        //next page
        price: 'input[name="price"]',
        downP: 'input[name="down"]',
        //next button
        excBtn: 'button[value="exellent"]',
        goodBtn: 'button[value="good"]',
        fairBtn: 'button[value="fair"]',
        poorBtn: 'button[value="poor"]',
        //next page
        noBankrupcyBtn: 'button[value="Has never been in bankruptcy"]',
        bankrupcyBtn: 'button[value="Has had bankruptcy before"]',
        forclosureBtn: 'button[value="Has had a foreclosure before"]',
        bothBtn: 'button[value="Has had both a foreclosure and a bankruptcy"]',
        //next page
        //next button
        //next button
        sendBtn: 'button[name="sendButton"]',
        results: 'div[class="vert-align"]',
        homeBtn: '.margin-btn'
    }
}