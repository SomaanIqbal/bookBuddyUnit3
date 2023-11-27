/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState } from "react";

const Account = ({ token }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [checkedOutBooks, SetCheckedOutBooks] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jsonResponse = await response.json();
     

      setEmail(jsonResponse.email);


      SetCheckedOutBooks(jsonResponse.books);
    } catch (error) {
      setError(error.message);
    }
  };



 
  return (
    <div className="account">
      <h1>Account</h1>

      {error && <p>{error}</p>}

      <button onClick={handleClick}>Check Account Info</button>

      {email && <p>Email: {email}</p>}

      {checkedOutBooks && (
        <div>
          <p>Books Checked Out: </p>{" "}
          <ul>
            {checkedOutBooks.map((book) => {
              return (
                <li key={book.id}>
                  {book.title} <button onClick={async() => {
                    const response = await fetch(
                        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`,
                        {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({
                            available: true,
                          }),
                        }
                      );
                      const jsonResponse = await response.json();

                      const updatedBooks = checkedOutBooks.filter((book)=>{return book.id === jsonResponse.book.id})
                      SetCheckedOutBooks(updatedBooks);
                  }}>Return Book</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
