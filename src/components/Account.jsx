/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState } from "react"

const Account = ({token}) => {
    
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [checkedOutBooks,SetCheckedOutBooks] = useState(null);

    const handleClick = async () => {
        
        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            setEmail(jsonResponse.email);
            SetCheckedOutBooks(jsonResponse.books);
            
            

        } catch (error){
            setError(error.message)
        }
    }
    return (
        <div className='account'>
            <h1>Account</h1>

            {error && <p>{error}</p>}

            <button onClick={handleClick} >Authenticate Token</button>


            {email && <p>Email: {email}</p>}

            {checkedOutBooks && <p>Books Checked Out: {checkedOutBooks}</p>}

            {/* {checkedOutBooks? <p>{checkedOutBooks}</p>: <p>no books checked out</p>} */}
        </div>
    )

    
}

export default Account