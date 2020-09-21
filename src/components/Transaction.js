import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
//delete transaction action from GlobalContext
  const {deleteTransaction } = useContext(GlobalContext)

      const sign = transaction.amount < 0 ? '-' : '+';

    return (
        //dynamic - transaction.amount (use ternary operator) if the transaction.amount is less than < 0 meaning its negative then
        // lets have a class 'minus' else : we will have a class 'plus'
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
          onClick={()=> deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}

//Math.abs will make an absolute number which will always be positive. 
//ONclick 