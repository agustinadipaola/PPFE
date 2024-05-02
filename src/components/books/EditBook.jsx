import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function EditBook() {

      // Retrieving the book ID from the URL parameters
    const params = useParams();
        // State variables for book details
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate(); // Function to navigate to different routes

    // useEffect hook to fetch the current book's details when the component mounts

    useEffect(() => {
              // Making a GET request to fetch the book's details using the book ID

        axios.get("http://localhost:8085/book/get/" + params.id)
            .then((response) => {
                              // Updating state variables with the response data
                setName(response.data.name);
                setAuthor(response.data.author);
                setImage(response.data.image);
                setType(response.data.type);
                console.log(response);

            }).catch(error => console.error(error));
    }, []);

    // Function to handle form submission for updating book details
    const handleSubmit = (event) => {
        event.preventDefault();
        // Making a PATCH request to update the book's details
        axios.patch("http://localhost:8085/book/update/" + params.id, { name, author, image, type })
            .then(() => {
                navigate("/book") // Navigating to the book list view after successful update
            }).catch(error => console.error(error))
    }
   // Function to delete an book
   function deleteBook() {
    axios
            // Making a DELETE request to remove the book using the book ID

    .delete("http://localhost:8085/book/delete/" + params.id)
   
    // window.location.reload(); // Reload the page after deletion
  }

    return (
      <div>
          <Link className="left-link nav-link" to="/book">
        &emsp; <FaArrowLeft size={30} />
      </Link>
        <form onSubmit={handleSubmit}>
        <h3 style={{fontFamily: "handwritting", textAlign: "center", fontSize:"40px"}}>EDIT YOUR BOOK</h3>

            <input type="text" className="form-control" placeholder="Book Name" value={name} onChange={event => setName(event.target.value)}></input>
            <br />
            <input type="text" className="form-control" placeholder="Author" value={author} onChange={event => setAuthor(event.target.value)} ></input>
            <br />
            <select
          type="text"
          className="form-control"
          placeholder="Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >        
        <option value= "Select">Select</option>
        <option value= "Paperbook">Paper Book</option>
        <option value= "e-Book">e-Book</option>
        <option value= "Audiobook">Audiobook</option>
        </select>
        <br/>
        
            <input
                name="image"
                className="form-control"
                type="text"
                placeholder="Paste your URL here"
                value={image}
                onChange={e => setImage(e.target.value)}

            />
            <br />
            <button class="my-button-create"
            style={{
              background: "transparent",
              fontSize: "20px",
              border:"1px solid grey" ,
              fontFamily: "handwritting",
            }}
           >SUBMIT EDIT</button>  &emsp; 
            <button
className="my-button-create"
style={{
  background: "transparent",
  fontSize: "20px",
  border:"1px solid grey" ,
  fontFamily: "handwritting",
}}
              onClick={() => {
                deleteBook(); // Calling deleteBook function when the button is clicked
              }}
            >
              DELETE BOOK
            </button>
        </form>
        </div>
    );
}

export default EditBook;