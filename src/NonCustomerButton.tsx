import { useState } from "react"
import IdInputWindow from "./IdInputWindow"
const NonCustomerButton = () =>
{
    const [showWindow, setShowWindow] = useState(false)

    const nonCustomerButtonHandler = () =>{
        setShowWindow(true)
    }
    return(
        <div>
        {!showWindow && (
        <button onClick={nonCustomerButtonHandler} type="button">Non-Customer</button>
      )}
        {showWindow && <IdInputWindow/>}
        </div>
    )
}
export default NonCustomerButton