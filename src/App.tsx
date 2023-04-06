import { useState } from 'react'
import './App.css'
import CustomerSearchBar from './assets/CustomerSearchBar'
import NonCustomerButton from './NonCustomerButton'

function App() {
  return (
    <div className="App">
      <div className='customer-search'>
      </div>
      <CustomerSearchBar/>
      <NonCustomerButton/>
    </div>
  )
}

export default App
