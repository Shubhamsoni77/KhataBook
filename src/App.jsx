import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'
import Listgroup from './Components/Listgroup';
import { FaZ } from 'react-icons/fa6';


const App = () => { 

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "salery",
      amount : 100000
    },
    {
      id : 2,
      text : "Rent",
      amount : -15000
    },
    {
      id : 3,
      text : "Grocery",
      amount : -20000
    }, 
    {
      id: 4,
      text: "Stocks",
      amount : 20000
    },
    {
      id: 5,
      text: "petrol",
      amount : -12500
    }
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
    <>
      <Navbar /> 

      <Form add = {add} edit={edit} updateTransaction={updateTransaction} />

     <Dashboard transactions={transactions} />

     <Listgroup transactions={transactions} del={del} editing={editing} />
      
    </>
  )
}

export default App
