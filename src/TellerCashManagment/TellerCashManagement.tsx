import { useState } from "react";
import BuySell from "./BuySell";

const TellerCashManagement =() =>{
    const [showBuySell, setBuySell] = useState(true)
    const buySellButtonHandler = () =>{
        setBuySell(false)
    }
    return(
        <div>
        {showBuySell && (<button onClick={buySellButtonHandler} type="button">Buy/Sell</button>)}
        {!showBuySell && <BuySell />}
        </div>
    )
}
export default TellerCashManagement