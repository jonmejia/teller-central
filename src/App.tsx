import { useState } from 'react'
import './App.css'
import CustomerSearchBar from './homepage/CustomerSearchBar'
import NonCustomerButton from './homepage/NonCustomerButton'
import TellerCashManagement from './TellerCashManagment/TellerCashManagement'

function App() {
  const [showSearch, setShowSearch] = useState(true)

  const nonCustomerButtonSearchHandler = () =>{
      setShowSearch(false)
  }
  return (
    <div className="App">
      <div className='customer-search'>
        {showSearch && <CustomerSearchBar/>}
      </div>
      <div className='non-customer-button'>
      <NonCustomerButton onButtonClick={nonCustomerButtonSearchHandler}/>
      </div>
      <TellerCashManagement/>
    </div>
  )
}

export default App
