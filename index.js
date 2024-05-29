function upTheValue(inputId) {
    const catchTheId = document.getElementById(inputId);
    const stringValue = catchTheId.value;
    const numberValue = parseFloat(stringValue);
    catchTheId.value = numberValue + 1;
}
function downTheValue(inputId) {
    const catchTheId = document.getElementById(inputId);
    const stringValue = catchTheId.value;
    const numberValue = parseFloat(stringValue);
    catchTheId.value = numberValue - 1;
}



document.getElementById('iphn-price-plus-btn').addEventListener('click', function () {


    upTheValue("iphn-price-input-field")

    const iphnPriceInputField = document.getElementById('iphn-price-input-field');
    const iphnPriceString = iphnPriceInputField.value;
    const iphnPriceNumber = parseFloat(iphnPriceString)




    const iphnPrice = document.getElementById("iphn-price");
    const iphnStringPrice = iphnPrice.value;
    const iphnNumberPrice = parseFloat(iphnStringPrice);



    const iphnMainPrice = iphnPriceNumber * 1219;
    iphnPrice.innerText = iphnMainPrice;





})


document.getElementById('iphn-price-minus-btn').addEventListener('click', function () {

    downTheValue('iphn-price-input-field')

    const iphnPriceInputField = document.getElementById('iphn-price-input-field');
    const iphnPriceString = iphnPriceInputField.value;
    const iphnPriceNumber = parseFloat(iphnPriceString)

    const iphnPrice = document.getElementById("iphn-price");
    const iphnStringPrice = iphnPrice.value;
    const iphnNumberPrice = parseFloat(iphnStringPrice);


    const iphnMainPrice = iphnPriceNumber * 1219;
    iphnPrice.innerText = iphnMainPrice;


})

document.getElementById('case-plus-btn').addEventListener('click', function () {

    upTheValue('case-price-input-field')


    const casePriceInputField = document.getElementById('case-price-input-field');
    const casePriceString = casePriceInputField.value;
    const casePriceNumber = parseFloat(casePriceString)


    const casePrice = document.getElementById("case-price-display");
    const caseStringPrice = casePrice.value;
    const caseNumberPrice = parseFloat(caseStringPrice);

    const caseMainPrice = casePriceNumber * 59;
    casePrice.innerText = caseMainPrice;



})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    downTheValue('case-price-input-field')


    const casePriceInputField = document.getElementById('case-price-input-field');
    const casePriceString = casePriceInputField.value;
    const casePriceNumber = parseFloat(casePriceString)


    const casePrice = document.getElementById("case-price-display");
    const caseStringPrice = casePrice.value;
    const caseNumberPrice = parseFloat(caseStringPrice);

    const caseMainPrice = casePriceNumber * 59;
    casePrice.innerText = caseMainPrice;



})




document.getElementById('check-btn').addEventListener('click', function () {

    const iphnPrice = document.getElementById("iphn-price");
    const iphnStringPrice = iphnPrice.innerText;
    const iphnNumberPrice = parseFloat(iphnStringPrice);

    const casePrice = document.getElementById("case-price-display");
    const caseStringPrice = casePrice.innerText;
    const caseNumberPrice = parseFloat(caseStringPrice);

    const subtotalPrice = iphnNumberPrice + caseNumberPrice

    const subtotal = document.getElementById('subtotal-display');
    subtotal.innerText = subtotalPrice

    const tax = document.getElementById('tax-display');
    const taxString = tax.innerText;
    const taxNumber = parseFloat(taxString);

    const totalDisplayMainBalance = document.getElementById('total-display');
    // const totalDisplayMainBalanceString = totalDisplayMainBalance.innerText;
    // const totalDisplayMainBalanceNumber = parseFloat(totalDisplayMainBalanceString);

    const mainBalanceLast = subtotalPrice + taxNumber;
    totalDisplayMainBalance.innerText = mainBalanceLast






})
