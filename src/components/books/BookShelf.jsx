import React, { useState, useEffect } from "react";
import axios from "axios"; // For making API calls
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTabletAlt, FaHome } from "react-icons/fa";

// BookShelf component shows a list of books
function BookShelf() {
  // 'books' holds our list of books, 'setBooks' updates it
  const [books, setBooks] = useState([]);

  // gets book data from our server
  function getBooks() {
    axios
      .get("http://localhost:8085/book/get") // API endpoint to get books
      .then((response) => {
        setBooks(response.data); // Update the books state with the fetched data (Put the books we got into our 'books' list)
        console.log("http://localhost:8085/book/get", response); // Log the response for debugging
      })
      .catch((err) => console.error(err)); // Log errors if any
  }
  // When the component first loads, we call 'getBooks' to load our books
  useEffect(() => getBooks(), []); 

    // Handler for when the rating of a book changes
// need to work on this since the raiting doesnt get saved
  const ratingChanged = (newRating) => {
    console.log(newRating);

  };
  return (
    <div className="container">
      <Link className="left-link nav-link" to="/book">
        <GiBookCover size={30} />
      </Link>

      <Link className="right-link nav-link" to="/">
        <FaHome size={30} />
      </Link>
      <h1
        style={{
          fontFamily: "handwritting",
          textAlign: "center",
          fontSize: "80px",
        }}
      >
        books
      </h1>

      <div className="container">
        <div className="row">
          {/* We go through each book and make a card for it */}
          {books.map((book) => (
            <Card
              className="col-sm-4 col-md-3 col-lg-2 m-8"
              style={{
                textAlign: "center",
                display: "flex",
                border: "1px solid transparent",
                justifyContent: "space-between", 

              }}
              key={book.id}
            >
              <img src={book.image} className="book-images" alt="bookImage" />
              <br />
              <h6 className="icon-container">
                {book.type === "Paperbook" && <FaBook />}
                {book.type === "e-Book" && <FaTabletAlt />}
                {book.type === "Audiobook" && <FaHeadphones />}
              </h6>
              <h5>{book.name}</h5>
              <h6> {book.author}</h6>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <br />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookShelf;
