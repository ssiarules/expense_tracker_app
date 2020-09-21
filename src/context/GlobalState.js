//this is where we will create our context
// Additional features you can add - created a context for profile or shop context/state

import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State 
/* It's going to be a single object, any global state will go in this object
    all we need is our transaction because as long as we have access to the transactions in certain components we can do our calculations,
    we just needs to pass the data down 
    1. Create dummy content/transaction to add to your object
        each transaction will have an ID, text value and amount(if its an expense it will be -number and income it will be +number)

*/
const initialState = {
    transactions: []
}

//Create our global context using this createContext that we imported from React.
// export const GlobalContext because we will be using it in other files and components 
export const GlobalContext = createContext(initialState);

/*Provider Component 
In order for other components to have access to our store or to our Global State we need to have a Provider 
    1. basically we need to wrap all of our components into a Provider Component. 
  2. in our props we will be using destructing and name all of our other components children
  3. inside our GlobalProvider we will input our UseReducer because we ned access to state and dispatch
     when we want to call a reducer action we need to use dispatch. useReducer takes in where ever our reducers are in separate file called AppReducer and takes in initialState
  */      

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(AppReducer, initialState);

    //Actions - Making calls to our reducer 
    /* 1. Create a function that takes in ID (we need to know which transaction to delete based on the ID)
        2. We will use dispatch(it was bought in from useReducer above). Dispatch to our reducer an object
        3. inside our object we will have a type for the action we want to happen
        4. Include Payload - any data we want to send to it, which will be the id
    */
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return( <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}

//Provider provides our state, provides any actions to the components that its wrapped around. 