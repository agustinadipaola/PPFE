import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

function CreateBooks() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  function getBooks() {
    axios
      .get("http://localhost:8085/book/get")
      .then((response) => {
        setBooks(response.data);
        console.log("http://localhost:8085/book/get", response);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => getBooks());

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8085/book/create", {
        name,
        author,
        image,
      })
      .then((response) => {
        setName("");
        setAuthor("");
        setImage("");
        getBooks();
      })
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>CREATE YOUR BOOKS</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Book Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        ></input>
        <br />
        <input
          id="BookUploadImages"
          name="uploadimages"
          className="form-control"
          type="text"
          placeholder="Paste your URL here"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button class="my-button-create">
          <strong>CREATE</strong>
        </button>
      </form>
      <br />
      <br />
      <div className="container">
        {books.map((book) => (
          <Card
            key={book.id}
            className="col-sm-6 col-md-2 col-lg-2 m-4"
            style={{ textAlign: "center" }}
          >

            <img src={book.image} className="book-images" alt="book-image" />
            <br />
            <h5><strong>{book.name}</strong></h5>
            <h6> {book.author}</h6>

            <br />
            <button
              class="my-button"
              onClick={() => navigate("/book/update/" + book.id)}
            >
              <strong>EDIT BOOK</strong>
            </button>
         
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CreateBooks;
