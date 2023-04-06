import { useState } from "react";
import CustomerSearchOptions from "../CustomerSearchOptions";

const CustomerSearchBar = () =>{
    return(
        <div>
        <CustomerSearchOptions/>
        <input type="text" name="customerSearchBar" id="customerSearchBar" />
        </div>
    )
}

export default CustomerSearchBar