/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react";
// import BooksRow from "./BooksRow";

const Books = ({}) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );
      const jsonResponse = await response.json();

    //   console.log(jsonResponse.books);
      setBooks(jsonResponse.books);
    };
    fetchBooks();
  }, []);

  return (
    <div className="books">
      <ul>
        {books && books.map((book) => {
          return <li key={book.id}>{book.title}</li>
          
        })}
      </ul>
    </div>
  );
};

export default Books;
