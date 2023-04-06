import { useState } from 'react'
import './App.css'
import NonCustomerButton from './NonCustomerButton'

function App() {
  return (
    <div className="App">
      <div className='customer-search'>
      </div>
      <NonCustomerButton/>
    </div>
  )
}

export default App
