import { useState } from "react";

const IdInputWindow = () =>{
    const [licenseNumber, setLicenseNumber] = useState("");
    const [stateOfOrigin, setStateOfOrigin] = useState("");
    const [expirationDate, setExpirationDate] = useState("");

    const licenseNumberChangeHandler = (e: any) =>{
        setLicenseNumber(e.target.value)
    }
    const stateOfOriginChangeHandler = (e: any) =>{
        setStateOfOrigin(e.target.value)
    }

    const expirationDateChangeHandler = (e: any) =>{
        setExpirationDate(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        console.log(licenseNumber,stateOfOrigin,expirationDate)
    }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="licenseNumber">License Number:</label>
        <input type="text" id="licenseNumber" value={licenseNumber} onChange={licenseNumberChangeHandler}/>
        <br />
  
        <label htmlFor="stateOfOrigin">State of Origin:</label>
        <input type="text" id="stateOfOrigin" value={stateOfOrigin} onChange={stateOfOriginChangeHandler} />
        <br />
  
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input type="date" id="expirationDate" value={expirationDate} onChange={expirationDateChangeHandler}/>
        <br />
  
        <button type="submit">Submit</button>
      </form>
    )
}

export default IdInputWindow;