var customCommands = {
    convertToOriginal: function (data) {
        this
        //initialize at 2 because that is where the selectors for
        //the first 10 employees begins
        for (var i = 2; i < data.length + 2; i++) {
            this
                .useXpath()
                .click(`(//li[${i}])`)
                .clearValue('(//input[@name="nameEntry"][1])')
                .setValue('(//input[@name="nameEntry"][1])', data[i - 2].name)
                .clearValue('(//input[2])')
                .setValue('(//input[2])', data[i - 2].phone)
                .clearValue('(//input[3])')
                .setValue('(//input[3])', data[i - 2].email)
                .clearValue('(//input[4])')
                .setValue('(//input[4])', data[i - 2].title)
                .click('((//button[1])[2])')
                .pause(100)
        }
        for (var j = 2; j < data.length + 2; j++) {
            this
                .useXpath()
                .click(`(//li[${j}])`)
                .verify.containsText('//p', data[j - 2].name)
        }
        return this
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [customCommands],
    elements: {
        nameField: {
            selector: '(//input[@name="nameEntry"][1])',
            locateStragety: 'xpath'
        },
        phoneField: {
            selector: '(//input[2])',
            locateStragety: 'xpath'
        },
        emailField: {
            selector: '(//input[3])',
            locateStragety: 'xpath'
        },
        titleField: {
            selector: '(//input[4])',
            locateStragety: 'xpath'
        },
        Savebtn: {
            selector: '((//button[1])[2])',
            locateStragety: 'xpath'
        }

    }
}