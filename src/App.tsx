import { useState } from 'react'
import './App.css'
import CustomerSearchBar from './homepage/CustomerSearchBar'
import NonCustomerButton from './homepage/NonCustomerButton'
import TellerCashManagement from './TellerCashManagment/TellerCashManagement'

function App() {
  const [showSearch, setShowSearch] = useState(true)
  const [showCashManagement, setShowCashManagement] = useState(true)
  const [showNonCustomer, setShowNonCustomer] = useState(true)

  const nonCustomerButtonSearchHandler = () =>{
      setShowSearch(false)
      setShowCashManagement(false)
  }

  const customerSearchHandler = () =>{
    setShowNonCustomer(false)
    setShowCashManagement(false)
  }

  const cashManagementHandler = ()=>{
    setShowSearch(false)
    setShowNonCustomer(false)
  }
  return (
    <div className="App">
      <div className='customer-search'>
        {showSearch && <CustomerSearchBar onButtonClick={customerSearchHandler}/>}
      </div>
      <div className='non-customer-button'>
      {showNonCustomer&&<NonCustomerButton onButtonClick={nonCustomerButtonSearchHandler}/>}
      </div>
      {showCashManagement&&<TellerCashManagement onButtonClick={cashManagementHandler}/>}
    </div>
  )
}

export default App
