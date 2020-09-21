import React, {useState, useContext} from 'react';
import { GlobalContext}  from '../context/GlobalState';
/* 
    with the form we need to add some component level state, the reason for that is because
    we have inputs that needs to be part of our state. 

    1.we are going to import a Hook called useState
    2. Create a piece of state called Text and then we need a function to manipulate that piece of State which we will call setText
    and set that = to useState(); (default you want to display will be inside useState(''))
    3. Create an Amount piece of state and function
    4. Connect the 2 pieces of states to our inputs and create value
    5. Onchange event because whenever its changed or we type into it needs to update that piece of state.
        call a function and than call setText in inside we set the (e.target.value) to capture the user input
    6. If you want to check that state is working properly on your browser go to inspect and react components tab and click
    on addTransaction component, start typing into the fields and you we begin to see that state capture your inputs. 
*/
export const AddTransaction = () => {
    //Component level state 
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text, 
        amount: +amount //this will turn the string into a number 
      }

      addTransaction(newTransaction);
    }

    
    return (
        <>
        <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
