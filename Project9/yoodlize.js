var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.yoodlizePage()
        pageObject
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        pageObject
            .end()
    },
    /* 'forLoop' : browser => {
        var headings = {
            heading1: 'Recreational Vehicles',
            heading2: 'Outdoor Gear',
            heading3: 'Electronics',
            heading4: 'Party & Wedding Equipment',
            heading5: 'Tools',
            heading6: 'Clothing',
            heading7: 'Home and Kitchen',
            heading8: 'Toys',
            heading9: 'Lawn',
            heading10: 'Sporting Equipment',
            heading11: 'DVDs',
            heading12: 'Venues',
            heading13: 'Music',
            heading14: 'Equipment',
            heading15: 'Misc'
        }
        for (let x = 1; x < 16; x++) {
            pageObject
            .click('@seeAll' + x)
            console.log(headings.heading + x)
            pageObject
            .verify.containsText('@headingLocation', headings.heading + x)
            .api.back()
        }
    },
*/

    'testSeeAll': browser => {
        pageObject
        /* these are a couple valid selectors for the see all buttons
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .click('(//div[contains(text(),"See all")])[1]')
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[1]') */
        //Test Recreational Vehicles

        .click('@seeAll1')
        .verify.containsText('@headingLocation', 'Recreational Vehicles')
        .api.back()
    pageObject
        //Test Outdoor Gear
        .click('@seeAll2')
        .verify.containsText('@headingLocation', 'Outdoor Gear')
        .api.back()
    pageObject
        //Test Electronics
        .click('@seeAll3')
        .verify.containsText('@headingLocation', 'Electronics')
        .api.back()
    pageObject
        //Test Party & Wedding Equipment
        .click('@seeAll4')
        .verify.containsText('@headingLocation', 'Party & Wedding Equipment')
        .api.back()
    pageObject
        //Test Tools
        .click('@seeAll5')
        .verify.containsText('@headingLocation', 'Tools')
        .api.back()
    pageObject
        //Test Clothing
        .click('@seeAll6')
        .verify.containsText('@headingLocation', 'Clothing')
        .api.back()
    pageObject
        //Test Home & Kitchen
        .click('@seeAll7')
        .verify.containsText('@headingLocation', 'Home and Kitchen')
        .api.back()
    pageObject
        //Test Toys & Games
        .click('@seeAll8')
        .verify.containsText('@headingLocation', 'Toys')
        .api.back()
    pageObject
        //test Lawn & Garden
        .click('@seeAll9')
        .verify.containsText('@headingLocation', 'Lawn')
        .api.back()
    pageObject
        //test Sporting Goods
        .click('@seeAll10')
        .verify.containsText('@headingLocation', 'Sporting Equipment')
        .api.back()
    pageObject
        //Test DVDs & Video Games
        .click('@seeAll11')
        .verify.containsText('@headingLocation', 'DVDs')
        .api.back()
    pageObject
        //Test Venues
        .click('@seeAll12')
        .verify.containsText('@headingLocation', 'Venues')
        .api.back()
    pageObject
        //Test Music
        .click('@seeAll13')
        .verify.containsText('@headingLocation', 'Music')
        .api.back()
    pageObject
        //Test Business Equipment
        .click('@seeAll14')
        .verify.containsText('@headingLocation', 'Equipment')
        .api.back()
    pageObject
        //Test Misc
        .click('@seeAll15')
        .verify.containsText('@headingLocation', 'Misc')
        .api.back()
    pageObject
    },
    'testBrowseCategories': browser => {
    pageObject
        //Test Tools
        .click('@button1')
        .verify.containsText('@headingLocation', 'Tools')
        .api.back()
    pageObject
        //Test Outdoor Gear
        .click('@button2')
        .verify.containsText('@headingLocation', 'Gear')
        .api.back()
    pageObject
        //Test Electronics
        .click('@button3')
        .verify.containsText('@headingLocation', 'Electronics')
        .api.back()
    pageObject
        //Test Party and Wedding
        .click('@button4')
        .verify.containsText('@headingLocation', 'Wedding')
        .api.back()
    pageObject
        //Test Recreational Vehicles
        .click('@button5')
        .verify.containsText('@headingLocation', 'Vehicles')
        .api.back()
    pageObject
        //Test Clothing
        .click('@button6')
        .verify.containsText('@headingLocation', 'Clothing')
        .api.back()
    pageObject
        //Test Home and Kitchen
        .click('@button7')
        .verify.containsText('@headingLocation', 'Home')
        .api.back()
    pageObject
        //Test Toys and Games
        .click('@button8')
        .verify.containsText('@headingLocation', 'Toys')
        .api.back()
    pageObject
        //Test Lawn and Garden
        .click('@button9')
        .verify.containsText('@headingLocation', 'Lawn')
        .api.back()
    pageObject
        //Test Sporting Goods
        .click('@button10')
        .verify.containsText('@headingLocation', 'Sporting')
        .api.back()
    pageObject
        //Test DVDs
        .click('@button11')
        .verify.containsText('@headingLocation', 'DVD')
        .api.back()
    pageObject
        //Test Venues
        .click('@button12')
        .verify.containsText('@headingLocation', 'Venues')
        .api.back()
    pageObject
        //Test Music
        .click('@button13')
        .verify.containsText('@headingLocation', 'Music')
        .api.back()
    pageObject
        //Test Misc
        .click('@button14')
        .verify.containsText('@headingLocation', 'Misc')
        .api.back()
    }
}