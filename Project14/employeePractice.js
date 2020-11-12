let originalData = [
    { name: 'Bernice Ortiz', phone: '4824931093', email: 'bortiz@gmail.com', title: 'CEO'},
    { name: 'Marnie Barnett', phone:'3094812387', email: 'mbarnett@hotmail.com', title: 'CTO'},
    { name: 'Phillip Weaver', phone: '7459831843', email: 'theWeavester@gmail.com', title: 'Manager'},
    { name: 'Teresa Osborne', phone: '3841238745', email: 'Terborne@yahoo.com', title: 'Director of Engineering'},
    { name: 'Dollie Berry', phone: '4873459812', email: 'DollBerry@yahoo.com', title: 'Front-End Developer'},
    { name: 'Harriett Williamson', phone: '6571249801', email: 'HmicWilliam@gmail.com', title: 'Front-End Developer'},
    { name: 'Ruby Estrada', phone: '5740923478', email: 'SaphireEstrada@hotmail.com', title: 'Back-End Developer'},
    { name: 'Lou White', phone: '8727813498', email: 'LouLou@yahoo.com', title: 'Full-Stack Developer'},
    { name: 'Eve Sparks', phone: '8734567810', email: 'SparkleSunshine@yahoo.com', title: 'Product Manager'},
    { name: 'Lois Brewer', phone: '8749823456', email: 'ElBrewsky@gmail.com', title: 'Sales Manager'},
    { name: 'Dimitri Blaiddyd', phone: '2815555555', email: 'BoarPrince@hotmail.com', title: 'King of Faerghus' },
    { name: 'Claude Von Riegan', phone: '8320000000', email: 'khalid@gmail.com', title: 'Wyvern Rider' }
]

module.exports = {
    
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager-v2/build/index.html')
        .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'Bring Back the Old Data': browser => {
        browser
        for (var i = 2; i < 14; i++){
            browser
                .useXpath()
                .click(`(//li[${i}])`)
                .clearValue('(//input[@name="nameEntry"][1])')
                .setValue('(//input[@name="nameEntry"][1])', originalData[i-2].name)
                .clearValue('(//input[2])')
                .setValue('(//input[2])', originalData[i-2].phone)
                .clearValue('(//input[3])')
                .setValue('(//input[3])', originalData[i-2].email)
                .clearValue('(//input[4])')
                .setValue('(//input[4])', originalData[i-2].title)
                .click('((//button[1])[2])')
                .pause(100)
            }
        for (var j = 2; j < 14; j++) {
            browser
                .useXpath()
                .click(`(//li[${j}])`)
                .verify.containsText('//p', originalData[j-2].name)       
        }
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