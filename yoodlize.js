module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'testSeeAll': browser => {
    browser
        .useXpath()
        /* these are a couple valid selectors for the see all buttons
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .click('(//div[contains(text(),"See all")])[1]')
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[1]') */
        //Test Recreational Vehicles
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[1]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Recreational Vehicles')
        .back()
        //Test Outdoor Gear
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[2]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Outdoor Gear')
        .back()
        //Test Electronics
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[3]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
        .back()
        //Test Party & Wedding Equipment
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[4]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Party & Wedding Equipment')
        .back()
        //Test Tools
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[5]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
        .back()
        //Test Clothing
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[6]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Clothing')
        .back()
        //Test Home & Kitchen
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[7]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Home and Kitchen')
        .back()
        //Test Toys & Games
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[8]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Toys')
        .back()
        //test Lawn & Garden
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[9]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Lawn')
        .back()
        //test Sporting Goods
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[10]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Sporting Equipment')
        .back()
        //Test DVDs & Video Games
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[11]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'DVDs')
        .back()
        //Test Venues
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[12]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Venues')
        .back()
        //Test Music
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[13]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Music')
        .back()
        //Test Business Equipment
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[14]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Equipment')
        .back()
        //Test Misc
        .click('(//a[@class="sc-esjQYD cZSeUZ"])[15]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Misc')
        .back()
    },
    'testBrowseCategories': browser => {
    browser
    .useXpath()
        //Test Tools
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[1]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
        .back()
        //Test Outdoor Gear
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[2]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Gear')
        .back()
        //Test Electronics
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[3]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
        .back()
        //Test Party and Wedding
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[4]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Wedding')
        .back()
        //Test Recreational Vehicles
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[5]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Vehicles')
        .back()
        //Test Clothing
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[6]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Clothing')
        .back()
        //Test Home and Kitchen
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[7]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Home')
        .back()
        //Test Toys and Games
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[8]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Toys')
        .back()
        //Test Lawn and Garden
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[9]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Lawn')
        .back()
        //Test Sporting Goods
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[10]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Sporting')
        .back()
        //Test DVDs
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[11]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'DVD')
        .back()
        //Test Venues
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[12]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Venues')
        .back()
        //Test Music
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[13]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Music')
        .back()
        //Test Misc
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[14]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Misc')
        .back()
    }
}