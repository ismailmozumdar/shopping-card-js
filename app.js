function updateCaseNumber(product, price, isIncreasing){
    const productNumber = document.getElementById(product + '-number');
    let productNumberValue = productNumber.value;
    if(isIncreasing ==true){
        productNumberValue = parseInt(productNumberValue) + 1;
    }
    else if(productNumberValue > 0){
        productNumberValue = parseInt(productNumberValue) - 1;
    }
    const productTotal = document.getElementById(product + '-total');
        productTotal.innerText = productNumberValue * price;
         productNumber.value = productNumberValue;
        calculationTotal();
}

function getInpute(product){
    const productInpute = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInpute.value);
    return productNumber;
}
function calculationTotal(){
    const phoneTotal = getInpute('phone') * 1219;
    const caseTotal = getInpute('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 5;
    const totalPrice = subTotal + tex;
    
    //updete the chashmemo price total
    document.getElementById('price-total').innerText = subTotal;
    //updete the chashmemo tex total
    document.getElementById('tex-total').innerText = tex;
    //updete the chashmemo tex total
    document.getElementById('total-price').innerText = totalPrice;
}
//case price varyfy
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case', 59, false);
})
//phone price varyfy
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false);
})