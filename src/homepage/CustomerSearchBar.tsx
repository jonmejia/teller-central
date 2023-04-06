import { useState } from "react";
import CustomerSearchOptions from "./CustomerSearchOptions";

const CustomerSearchBar = () =>{
    return(
        <div>
        <CustomerSearchOptions/>
        <input type="text" name="customerSearchBar" id="customerSearchBar" />
        <button type="submit">submit</button>
        </div>
    )
}

export default CustomerSearchBar