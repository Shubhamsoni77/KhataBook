import React, { useContext } from 'react'
import ListItem from './ListItem';
import TransactionContext from '../context/TransactionContext';


const Listgroup = () => {
  // console.log(transactions);

    const { transactions } = useContext(TransactionContext) 

  
  return (
   
   <div className=' w-[80%] h-auto ml-16.5 border-1 my-5 md:ml-30 '>
    {         
      transactions.map((transaction) => <ListItem transaction={transaction} key={transaction.id}  /> )
    }   
     
   </div>

  )
}

export default Listgroup
