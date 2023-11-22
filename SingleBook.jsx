/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";

const SingleBook = ({ selectedBookId, setSelectedBookId }) => {

    const [bookDetails,setBookDetails] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async() => {
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${selectedBookId}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse.book);
            setBookDetails(jsonResponse.book)
        }
        fetchBookDetails()
    },[])

  return (
    <div className="singleBook">
      <ul>
        {bookDetails? (<div><li>Title: {bookDetails.title}</li> <li>Author{bookDetails.author}</li> <li>Description: {bookDetails.description}</li> <li>Available: {bookDetails.available}</li> <img  src={bookDetails.coverimage}/></div>):(<h2>loading...</h2>)}
      </ul>

      <button onClick={() => {setSelectedBookId(null)}}>
        Back
      </button>

    </div>
  );
};

export default SingleBook;
