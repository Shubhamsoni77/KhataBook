import { createContext, useState } from "react";

const TransactionContext = createContext()

   export const TransactionProvider = ({children}) => {

    const [transactions,setTransactions] = useState([
        
    ]) 

    const [edit,setEdit] = useState(
        {transaction: "",
        isEdit: false }
      )
      // console.log(edit);
      
  
      const editing = (transaction) => {
        setEdit({
          transaction: transaction,
          isEdit : true 
        })     
      }
  
      const updateTransaction = (updatedTransaction) => {
        console.log(updatedTransaction)
        setTransactions(transactions.map(transaction =>
           transaction.id === updatedTransaction.id ? updatedTransaction
            : transaction ) )
  
            setEdit({
               transaction : {},
               isEdit : false,    
            })
      }
  
  
      const add = (text,amount) => {
        setTransactions([{id: crypto.randomUUID() ,
           text :text , 
           amount: parseInt(amount)},...transactions]) 
      }
      // console.log(transactions)
  
        const del = (id) => {
            console.log(id); 
            let filtertransaction = transactions.filter((item) => item.id !== id)
            setTransactions(filtertransaction) 
        }
  
  


    return (
        
        <TransactionContext.Provider value={{ transactions, edit, add, updateTransaction, del ,editing }} >
            {children}
        </TransactionContext.Provider>

    )

   }




export default TransactionContext 