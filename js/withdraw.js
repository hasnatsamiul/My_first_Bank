/*
1. add event handler with the withdraw button
2. get the withdraw amount from the input field
  2.5: also make sure to convert the input into a number by using parsefloat
3.Get previous withdraw total
4.calculate total withdraw amount
    4.5 set total withdraw amount
5. get the previous balance total
6. Calculate new balance total

7.Clear the input Field
    
*/

// step 1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    // step 7
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('please Provide a valid number');
        return;
    }

    // step :3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step: 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You dont have that much money');
        return;
    }

    // Step 4

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




})