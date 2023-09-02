
function allAdedSecend(inputId) {
    const dipositeInput = document.getElementById(inputId);
    const dipositeAmountText = dipositeInput.value;
    const dipositeAmount = parseFloat(dipositeAmountText);
    dipositeInput.value = '';
    return dipositeAmount;
};



function updateTotalFild(totalFildId, Amount) {
    const dipositeTotal = document.getElementById(totalFildId);
    const dipositeTotalText = dipositeTotal.innerText;
    const previousDipositeTotal = parseFloat(dipositeTotalText);
    dipositeTotal.innerText = previousDipositeTotal + Amount;
};


//takar poriman jototuku oituiku ,,beshi nile hobe na aita dekhano
function currentBanlance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}




function updatebalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = currentBanlance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
};



document.getElementById('diposite-button').addEventListener('click', function () {
    // const dipositeInput = document.getElementById('diposite-input');
    // const dipositeAmountText = dipositeInput.value;
    // const dipositeAmount = parseFloat(dipositeAmountText);

    const dipositeAmount = allAdedSecend('diposite-input')
    if (dipositeAmount > 0) {
        updateTotalFild('total-diposite', dipositeAmount)
        updatebalance(dipositeAmount, true);
    }




    // const dipositeTotal = document.getElementById('total-diposite');
    // const dipositeTotalText = dipositeTotal.innerText;
    // const previousDipositeTotal = parseFloat(dipositeTotalText);
    // dipositeTotal.innerText = previousDipositeTotal + dipositeAmount;




    //update balance 

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + dipositeAmount;



    // dipositeInput.value = '';
});





//handle withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // withdrawAmount = parseFloat(withdrawAmountText)

    const withdrawAmount = allAdedSecend('withdraw-input')
    const getcurrentBalance = currentBanlance()

if(withdrawAmount > 0 && withdrawAmount < getcurrentBalance){
    updateTotalFild('withdraw-total', withdrawAmount)
    updatebalance(withdrawAmount, false);
}
if(withdrawAmount > getcurrentBalance){
   console.log('you dont have')
}


    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
   





    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

   


    // withdrawInput.value = '';
})