import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHeadphones, FaPlus, FaBook, FaTabletAlt } from "react-icons/fa";
import confetti from "canvas-confetti";

// CreateBooks component allows users to add new books to their library
var scalar = 2;
var book = confetti.shapeFromText({ text: '📓', scalar });

var defaults = {
  // spread: 180,
  ticks: 120,
  // gravity: 0,
  // decay: 0.96,
  // startVelocity: 10,
  scalar: 3.5,
  spread: 180,
  particleCount: 30,
  origin: { y: -0.1 },
  startVelocity: -40,
  shapes: [book, 'circle' ],
};

function CreateBooks() {
    // State variables to store form inputs and book list
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [books, setBooks] = useState([]); // State for storing the list of books
  const navigate = useNavigate();// Enables programmatic navigation

    // Function to fetch books from the server
  function getBooks() {
    axios
      .get("http://localhost:8085/book/get") // API endpoint to get books
      .then((response) => {
        setBooks(response.data);// Update state with fetched books
        console.log("http://localhost:8085/book/get", response);
      })
      .catch((err) => console.error(err));
  }
  // useEffect hook to load books when the component mounts

  useEffect(() => getBooks());

    // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Post request to add a new book

    axios
      .post("http://localhost:8085/book/create", {
        name,
        author,
        image,
        type,
      })
      .then((response) => {
                // Clear form fields after submission
        setName("");
        setAuthor("");
        setImage("");
        setType("");
        getBooks(); // Refresh the book list
      })
      .catch((error) => console.error(error));
  };
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30
    });}
  return (
    <div className="container">
      <Link className="nav-link" to="/book/get">
        <GiBookshelf size={50} />
      </Link>
      <br />
      <div
        style={{
          backgroundSize: "cover",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "50%",
          }}
        >
          <h3
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontFamily: "handwritting",

            }}
          >
            ADD A BOOK TO YOUR LIBRARY{" "}
          </h3>
          <br/>
         <h6 style={{          fontFamily: "handwritting",
}} >Title: </h6>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <br/>
             <h6 style={{          fontFamily: "handwritting",
}} >Author: </h6>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          ></input>
          <br/>
   <h6 style={{          fontFamily: "handwritting",
}} >Format: </h6>          <select
            type="text"
            className="form-control"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Select">Select type of book</option>
            <option value="Paperbook">Paperback</option>
            <option value="e-Book">e-Book</option>
            <option value="Audiobook">Audiobook</option>
          </select>
          <br/>
          <h6 style={{          fontFamily: "handwritting",
}} >Cover: </h6>          <input
            id="BookUploadImages"
            name="uploadimages"
            className="form-control"
            type="text"
            placeholder="Paste your URL here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <button
            className="my-button-create"
            style={{
              background: "transparent",
              fontSize: "20px",
              border:"1px solid grey" ,
              fontFamily: "handwritting",
            }}
            onClick={shoot}
          >
ADD
          </button>
        </form>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <Card
              className="col-sm-6 col-md-4 col-lg-2 m-6"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between", 
                backgroundColor: "beige",
                border: "1px solid transparent",

              }}
              key={book.id}
            >
              <img src={book.image} className="book-images" alt="bookImage" />
              <br />
              <h5>{book.name}</h5>
              <h6> {book.author}</h6>
              <h6>
                {book.type === "Paperbook" && <FaBook />}
                {book.type === "e-Book" && <FaTabletAlt />}
                {book.type === "Audiobook" && <FaHeadphones />}
              </h6>
              <button
            className="my-button-create"
            style={{ fontFamily: "handwritting", fontSize: "20px", border: "1px solid black",               background: "transparent",
          }}
            onClick={() => navigate("/book/update/" + book.id)}
              
                >
                  
                  Edit Book
              </button>
              <br/>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateBooks;
