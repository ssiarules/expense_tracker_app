/*Reducer is how we specify the application state changes in response to 
certain actions to our store our context

*/

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [action.payload, ...state.transactions]
            }
        default: 
            return state;
    }
}

//reducer is a way to change state and send it down to components to your application 

/*
DELETE_TRANSACTION 
    we can't change our state we have to create a new state and send it down
    1. ...(spread operator) send the current state
    2. we want to change our transaction value - basically send down all the transaction expect the one that was deleted
        we have that id sent to payload 
    3. us filter method - for each transaction where transaction.id is not equal to the action.payload
        we are filter out anything that has that ID
 */

/* 
ADD_TRANSACTION 
    1. create a new case 
    2. Return our initial state
    3. return all the transactions that are already there and additional to new transaction which is in the payload
    4. set to an array [] and get the initial transactions using (...state)spread operator 
        the spread takes all the values from the array and puts them in here additional to that we want
        our action.payload - which is our new transactions that being added. 

 */