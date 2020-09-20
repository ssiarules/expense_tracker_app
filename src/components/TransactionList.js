import React, { useContext } from 'react'
import { Transaction } from './Transaction';

import { GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {

    //Pull anything from our GlobalContext using the useContext Hook
    const { transactions } = useContext(GlobalContext);

       // console.log(context)
    return (
        <>
             <h3>History</h3>
           <ul className="list">
            {transactions.map(transaction => (< Transaction key={transaction.id}transaction={transaction} /> ))}
             
      </ul>
        </>
    )
}
