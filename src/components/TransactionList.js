import React, { useContext } from 'react'
import { GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {

    //Pull anything from our GlobalContext using the useContext Hook
    const { transactions } = useContext(GlobalContext);

       // console.log(context)
    return (
        <>
             <h3>History</h3>
           <ul className="list">
            {transactions.map(transaction => (<li className="minus">
          {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li> ))}
             
      </ul>
        </>
    )
}
