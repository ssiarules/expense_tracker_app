//Generate our function rafc
import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

   const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
         <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          < p className="money minus">{expense}</p>
        </div>
      </div>
    )
}

/* 

 CALCULATION FOR AMOUNTS 
 const amounts = transactions.map(transaction => transaction.amount);

 CALCULATION FOR TOTAL 
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

 filter through amounts, anything greater than zero(0) all the positive numbers
      than add them all together using reduce and add a decimal. 
   const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

 filter through amounts, anything less than zero(0) all the negative numbers
      than add them all together using reduce and add a decimal.
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


*/