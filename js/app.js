  /*====total income handling====*/
 function getIncomeTotal(){
    const totalIncomeText=document.getElementById('total-income').value;
    const totalIncome=parseFloat(totalIncomeText);
    if(isNaN(totalIncome)==true || totalIncome <0){
      document.getElementById('income-alert').innerText='**please enter a valid number?**';
      return false;
    }
   else{
    return totalIncome;
   }
 };
/*==== total expenses handling ====*/
 function getExpensesInput(expenses){
    //  find expenses
    const expensesText=document.getElementById(expenses +'-expenses').value;
    const expensesNumber=parseFloat(expensesText);
    if(isNaN(expensesNumber)==true || expensesNumber <0){
      document.getElementById(expenses+'-alert').innerText='**please enter a valid number?**';
      return false;
   }
    return expensesNumber;
    
 };
   /*==== total expenses calculation ====*/
 function getTotalCost(){
   const foodExpense=getExpensesInput('food');
   const rentExpense=getExpensesInput('rent');
   const clothesExpense=getExpensesInput('clothes');
   const totalCostId=document.getElementById('total-cost');
   const totalCostText=totalCostId.innerText;
   const totalExpenses=foodExpense + rentExpense + clothesExpense;
   const inTotalIncome=getIncomeTotal();
   if(totalExpenses > inTotalIncome){
    document.getElementById('total-cost').innerText='**Much more expenses**';
    return false;
  }
   totalCostId.innerText=totalExpenses;
   return totalExpenses;

 }
 /* ==== balance calculation  ====*/
function getTotalBlance(){
  const totalBalanceId=document.getElementById('balance');
    const totalBalanceText=totalBalanceId.innerText;
    const inTotalIncome =getIncomeTotal();
    const inTotalCost=getTotalCost();
    const totalBalance=inTotalIncome -inTotalCost;
    totalBalanceId.innerText=totalBalance;
     return totalBalance;
};
/*==== get  save persent ====*/
function getSavePersent(){
  const savePersentInput=document.getElementById('save-percent').value;
  const savePersent=parseFloat(savePersentInput);
  if(isNaN(savePersent)==true || savePersent <0){
    document.getElementById('persent-alert').innerText='**please enter a valid number?**';
    return false;
 }
  return savePersent;
}
/*==== get save amount  ====*/
function getSaveAmount(){
 const saveAmountId=document.getElementById('save-amount');
 const saveAmountText=saveAmountId.innerText;
 const savePersent=getSavePersent();
 const inTotalIncome =getIncomeTotal();
 const saveAmount=(inTotalIncome * savePersent) / 100;
 const inTotalBlance=getTotalBlance();
 if(saveAmount > inTotalBlance){
  document.getElementById('save-amount').innerText='**Much save amount**';
  return false;
 }
 saveAmountId.innerText=saveAmount;
 return saveAmount;
}
/* ==== get remaining blance ====*/
function getRemainingBlance(){
  const remainingBlanceId=document.getElementById('remaining-balance');
  const remainingBlanceText=remainingBlanceId.innerText;
  const totalBalance =getTotalBlance();
  const saveAmount =getSaveAmount();
  const remainingBlance= totalBalance -saveAmount;
  remainingBlanceId.innerText=remainingBlance;
  return remainingBlance;
}
/*==== save amount ====*/

  /*====calculate-btn event handling ====*/
document.getElementById('calculate-btn').addEventListener('click',function(){
  // getIncomeTotal fuction call  
  
   getIncomeTotal();
  //getTotalCost fuction call  
   getTotalCost();
  //getTotalBlance fuction call  
 
    getTotalBlance();
});
/* ==== save-btn event handling ====*/
document.getElementById('save-btn').addEventListener('click',function(){
  /*==== remaining Blance event handling  ====*/
// getSavePersent function call
 getSavePersent();
// getSaveAmount function call
 getSaveAmount();
//getRemainingBlance fuction call  
 getRemainingBlance();
})