import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { IoCreate } from "react-icons/io5";
import {Link} from 'react-router-dom';

function BookShelf() {
  // State for storing items and search value
  const [books, setBooks] = useState([]);
  const [filterBookName, setFilterBookName] = useState("");


  // Fetch items from the server on component 

  function getBooks() {
    axios.get("http://localhost:8085/book/get")
      .then(response => {
        setBooks(response.data);
        console.log("http://localhost:8085/book/get", response);
      })
      .catch(err => console.error(err));
  }
  useEffect(() => getBooks()
    , []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (

    <div className="container">
  
  <Link                  className="nav-link"
           to="/book"
><IoCreate /></Link>

      {books.map(book => (
        <Card
          key={book.id}
          className="col-sm-6 col-md-4 col-lg-3 m-3"
          style={{ textAlign: "center" }}
        >
          
          <img src={book.image} className="book-images" alt="bookImage" />
          <br />
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
  );
}

export default BookShelf;