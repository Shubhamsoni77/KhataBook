import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";


const ListItem = ({transaction,del,editing}) => { 
  // console.log(transaction) 


  


  return (
  
  <div className= {
     transaction.amount > 0
     ? "relative p-4 h-22 bg-indigo-400  m-4  "
     : "relative p-4 h-22 bg-red-500  m-4"
  }>

    <span className='absolute top-5 right-5 flex text-xl space-x-4'>
        <FaEdit 
        onClick={() => editing(transaction)}
        className='text-yellow-400' />
        <FaTrash 
        onClick={()=>del(transaction.id)}  
        className='text-white' />
    </span>
    <h1 className='font-bold text-white text-base text-center '>{transaction.text}</h1>
    <h1 className='font-bold text-white text-3xl text-center '>{transaction.amount} </h1> 
  </div>
  )
}

export default ListItem
