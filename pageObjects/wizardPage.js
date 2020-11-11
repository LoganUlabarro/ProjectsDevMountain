module.exports ={
    url: 'http://localhost:3000/#/',
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