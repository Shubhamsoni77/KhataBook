import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'
import Listgroup from './Components/Listgroup';
import { FaZ } from 'react-icons/fa6';
import { TransactionProvider } from './context/TransactionContext';


const App = () => { 

  
 

  return (
    <TransactionProvider> 
      <Navbar /> 

      <Form  />

     <Dashboard  />

     <Listgroup   />
      
    </TransactionProvider>
  )
}

export default App
