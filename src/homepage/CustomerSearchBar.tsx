import { useState } from "react";
import CustomerSearchOptions from "./CustomerSearchOptions";

interface CustomerSearchProps {
    onButtonClick: () => void;
  }

const CustomerSearchBar = ({onButtonClick}: CustomerSearchProps) =>{
    const handleClick = () =>{
        onButtonClick()
    }
    return(
        <div>
        <CustomerSearchOptions/>
        <input type="text" name="customerSearchBar" id="customerSearchBar" />
        <button onClick={handleClick} type="submit">submit</button>
        </div>
    )
}

export default CustomerSearchBar