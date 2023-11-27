/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const SingleBook = ({setSelectedBookId,token }) => {

    
    const {id} = useParams();
    const navigate = useNavigate()

    const [bookDetails,setBookDetails] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async() => {
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
            const jsonResponse = await response.json();
            
            setBookDetails(jsonResponse.book)
        }
        fetchBookDetails()
    },[])

    const checkOutBook = async() => {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                available: false,
            })
        });
        const jsonResponse = await response.json();
       

        setBookDetails(jsonResponse.book)
    }

  return (
    <div className="singleBook">
        <button onClick={checkOutBook}>Check Out Book</button>

      <ul>
        {bookDetails? (<div><li>Title: {bookDetails.title}</li> <li>Author: {bookDetails.author}</li> <li>Description: {bookDetails.description}</li> <li>Available: {bookDetails.available? 'yes':'no'}</li> <img  src={bookDetails.coverimage}/></div>):(<h2>loading...</h2>)}
      </ul>

      <button onClick={() => { setSelectedBookId(null) , navigate('/books')}}>
        Back
      </button>

    </div>
  );
};

export default SingleBook;
