import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditBook() {

    const params = useParams();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8085/book/get/" + params.id)
            .then((response) => {
                setName(response.data.name);
                setAuthor(response.data.author);
                setImage(response.data.image);
                console.log(response);

            }).catch(error => console.error(error));
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.patch("http://localhost:8085/book/update/" + params.id, { name, author, image })
            .then(() => {
                navigate("/book")
            }).catch(error => console.error(error))
    }
   // Function to delete an book
   function deleteBook() {
    axios
    .delete("http://localhost:8085/book/delete/" + params.id)
   
    // window.location.reload(); // Reload the page after deletion
  }

    return (
        <form onSubmit={handleSubmit}>
            <h5>EDIT YOUR BOOK</h5>

            <input type="text" className="form-control" placeholder="Book Name" value={name} onChange={event => setName(event.target.value)}></input>
            <br />
            <input type="text" className="form-control" placeholder="Author" value={author} onChange={event => setAuthor(event.target.value)} ></input>
            <br />
            <input
                name="image"
                className="form-control"
                type="text"
                placeholder="Paste your URL here"
                value={image}
                onChange={e => setImage(e.target.value)}

            />
            <br />
            <button class="my-button-create" ><strong>SUBMIT EDIT</strong></button>
            <button
              class="my-button"
              onClick={() => {
                deleteBook();
              }}
            >
              <strong>DELETE BOOK</strong>
            </button>
        </form>);
}

export default EditBook;