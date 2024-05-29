function setTheMainTotal(iphnPrice, casePrice, settingPosition) {
    const iphnPriceString = document.getElementById(iphnPrice);
    const mainPriceOfIphn = iphnPriceString.innerText;
    const mainPriceOfIphnNumber = parseFloat(mainPriceOfIphn);


    const casePriceString = document.getElementById(casePrice);
    const mainPriceOfCase = casePriceString.innerText;
    const mainPriceOfCaseNumber = parseFloat(mainPriceOfCase);


    const priceDisplay = mainPriceOfIphnNumber + mainPriceOfCaseNumber;


    const settingPositionValue = document.getElementById('subtotal-display');
    const settingPositionString = settingPositionValue.innerText;


    settingPosition.innerText = priceDisplay;


}

// setTheMainTotal('iphn-price', 'case-price-display','subtotal-display')