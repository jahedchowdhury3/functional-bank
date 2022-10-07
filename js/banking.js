function getInputValue(inputid) {
    const inputField = document.getElementById(inputid);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the field
    inputField.value = '';
    return amountValue;
}

document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');

    // get current deposit total
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + previousDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositAmount + previousBalanceTotal;

})

// withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  const withdrawInput = document.getElementById('withdraw-input');
      const withdrawAmountText = withdrawInput.value;
      const withdrawAmount = parseFloat(withdrawAmountText);*/
    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})