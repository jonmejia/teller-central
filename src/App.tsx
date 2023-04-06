import { useState } from 'react'
import './App.css'
import CustomerSearchBar from './homepage/CustomerSearchBar'
import NonCustomerButton from './homepage/NonCustomerButton'

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
      <NonCustomerButton onButtonClick={nonCustomerButtonSearchHandler}/>
    </div>
  )
}

export default App
