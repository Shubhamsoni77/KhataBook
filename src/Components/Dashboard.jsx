import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Dashboard = () => { 

  const {transactions} = useContext(TransactionContext)


  const income = transactions.filter((transaction) => transaction.amount > 0 )

  const inc = income.reduce((a,b) => a+b.amount,0)
    // console.log(inc);
    
   const expense = transactions.filter((transaction) => transaction.amount < 0)
  //  console.log(expense);
   const exp = expense.reduce((a,b) => a+b.amount,0 )
  //  console.log(exp) 
  
   const balance = inc-exp 
  //  console.log(balance)
   

  return (
    <div className=" text-center pl-15 grid grid-cols-1 md:grid-cols-3 gap-3">
    <div className=" w-[90%] p-4 rounded-sm bg-green-500"> 
      <h2 className='text-xl font-bold text-white '>Total Income</h2>
      <h1 className=' text-2xl font-bold my-2 text-white '>{inc}</h1> 
    </div>
    <div className=" w-[90%] p-4 bg-red-600">
     <h2 className='text-xl font-bold text-white '>Total Expence</h2>
     <h1 className=' text-2xl font-bold my-2 text-white '> {exp} </h1> 
    </div>
    <div className=" w-[90%] p-4 bg-yellow-400">
    <h2 className='text-xl font-bold text-white '>Total Balance</h2>
    <h1 className=' text-2xl font-bold my-2 text-white '> {balance} </h1> 
     </div> 
   </div>
  )
}

export default Dashboard
