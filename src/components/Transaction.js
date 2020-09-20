import React from 'react'

export const Transaction = ({ transaction }) => {

      const sign = transaction.amount < 0 ? '-' : '+';

    return (
        //dynamic - transaction.amount (use ternary operator) if the transaction.amount is less than < 0 meaning its negative then
        // lets have a class 'minus' else : we will have a class 'plus'
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}

//Math.abs will make an absolute number which will always be positive. 