const CustomerSearchOptions = () =>
{
    return(
        <div className="search-bar-container">
            <p>Search customer by:</p>
            <label htmlFor="accountNumber">Account Number</label>
            <input type="radio" name="searchType" id="accountNumber" />
            <label htmlFor="socialSecurityNumber">Social Security Number</label>
            <input type="radio" name="searchType" id="socialSecurityNumber" />
            <label htmlFor="debitCreditCardNumber">Debit/Credit Card Number</label>
            <input type="radio" name="searchType" id="debitCreditCardNumber" />
        </div>
    )
}
export default CustomerSearchOptions