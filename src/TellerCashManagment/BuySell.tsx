import { useState } from "react";

const BuySell = () =>{
    return (
        <form>
            <label htmlFor="buy">Buy</label>
            <input type="radio" name="transactionType" id="buy" />
            <label htmlFor="sell">Sell</label>
            <input type="radio" name="transactionType" id="sell" />
            <label htmlFor="userCashBox">to:</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br/>


            <h2>Bills</h2>
            <label htmlFor="$100">$100</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$50">$50</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$20">$20</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$10">$10</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$5">$5</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$1">$1</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />

            <h2>Coins</h2>
            <label htmlFor="$1.00">$1.00</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$0.50">$0.50</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$0.25">$0.25</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$0.10">$0.10</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$0.05">$0.05</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <label htmlFor="$0.01">$0.01</label>
            <input type="text" name="userCashBox" id="userCashBox" />
            <br />
            <button type="submit"></button>
            <br />
        </form>
    )
}
export default BuySell