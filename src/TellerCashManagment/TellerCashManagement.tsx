import { useState } from "react";
import BuySell from "./BuySell";
import Balance from "./Balance";

interface cashManagementProps {
    onButtonClick: () => void;
  }

const TellerCashManagement =({onButtonClick}: cashManagementProps) =>{
    const [showBuySell, setBuySell] = useState(false)
    const buySellButtonHandler = () =>{
        setBuySell(true)
        onButtonClick()
    }
    const [showBalance, setBalance] = useState(false)
    const balanceButtonHandler = () =>{
        setBalance(true)
        onButtonClick()
    }
    return(
        <div>
        {!showBuySell && (
        <div>
            <button onClick={buySellButtonHandler} type="button">Buy/Sell</button>
            <button onClick={balanceButtonHandler} type="button">Balance</button>
        </div>
        )}

        {showBuySell && <BuySell />}

        {showBalance && <Balance/>}
        </div>
    )
}
export default TellerCashManagement