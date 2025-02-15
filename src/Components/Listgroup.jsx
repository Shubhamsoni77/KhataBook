import React from 'react'
import ListItem from './ListItem';


const Listgroup = ( {transactions,del,editing} ) => {
  // console.log(transactions);
  
  return (
   
   <div className=' w-[80%] h-auto ml-16.5 border-1 my-5 md:ml-30 '>
    {         
      transactions.map((transaction) => <ListItem transaction={transaction} key={transaction.id} del={del} editing={editing} /> )
    }   
     
   </div>

  )
}

export default Listgroup
