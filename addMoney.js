
// condition adn add money start------>

document.getElementById('addmoneybtn').addEventListener('click', function (event) {
    event.preventDefault()
    const admoneyamoun = document.getElementById('admoneyamount').value;
    const admoneyamount = parseFloat(admoneyamoun);

    const mianBalance = document.getElementById('mianBalance').innerText;
    const addMoneyBalance = parseFloat(mianBalance)

    const sum = admoneyamount + addMoneyBalance;

    const asmoneypinn = document.getElementById('asmoneypin').value;
    const asmoneypinnn = parseFloat(asmoneypinn)

    if (asmoneypinnn === 1122) {
        mianBalance = document.getElementById('mianBalance').innerText = sum
    } else {
        console.log('nai');
    }
})

// condition adn add money end------>

// money adanprodan strt----------->
document.getElementById('addmoneyform').style.display = 'none';
document.getElementById('addmoneyform2').style.display = 'none';
document.getElementById('addmoneyform3').style.display = 'none';
document.getElementById('addmoneyform4').style.display = 'none';
document.getElementById('addmoneyform5').style.display = 'none';

document.getElementById('adMoneybtn').addEventListener('click', function () {
    document.getElementById('addmoneyform').style.display = 'block';
    document.getElementById('addmoneyform2').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'none';

})

document.getElementById('cashout').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('addmoneyform').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'none';
    document.getElementById('addmoneyform2').style.display = 'block';

    
})

document.getElementById('transfer').addEventListener('click', function () {
    document.getElementById('addmoneyform').style.display = 'none';
    document.getElementById('addmoneyform2').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'block';

})

document.getElementById('getBonus').addEventListener('click', function () {
    document.getElementById('addmoneyform').style.display = 'none';
    document.getElementById('addmoneyform2').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'block';

})
document.getElementById('paybill2').addEventListener('click', function () {
    document.getElementById('addmoneyform').style.display = 'none';
    document.getElementById('addmoneyform2').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'block';

})
document.getElementById('transition').addEventListener('click', function () {
    document.getElementById('addmoneyform').style.display = 'none';
    document.getElementById('addmoneyform2').style.display = 'none';
    document.getElementById('addmoneyform3').style.display = 'none';
    document.getElementById('addmoneyform4').style.display = 'none';
    document.getElementById('addmoneyform5').style.display = 'none';
    document.getElementById('addmoneyform6').style.display = 'block';

})




// money adanprodan end----------->