import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function getNotes() {
    axios
      .get("http://localhost:8085/notes/get")
      .then((response) => {
        setNotes(response.data);
        console.log("http://localhost:8085/notes/get", response);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => getNotes());

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8085/notes/create", {
        title,
        text,
       
      })
      .then((response) => {
        setTitle("");
        setText("");
        getNotes();
      })
      .catch((error) => console.error(error));
  }

//   function deleteNote() {
//     axios
//     .delete("http://localhost:8085/notes/delete/" + params.id)
//     .then(() => {
//         navigate("/notes")
//     }).catch(error => console.error(error))

//   }
  return (
    <div className="container">
      <Link className="right-link nav-link" to="/">
    <FaHome size={30} /> 
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
            ADD YOUR NOTES          </h3>
          <br/>
         <h6 style={{          fontFamily: "handwritting",
}} >Title: </h6>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <br/>
             <h6 style={{          fontFamily: "handwritting",
}} >Text: </h6>
          <textarea
            type="text"
            className="form-control"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          <br/>
          <button
            className="my-button-create"
            style={{
              background: "transparent",
              fontSize: "20px",
              border:"1px solid grey" ,
              fontFamily: "handwritting",
            }}
          >
ADD
          </button>
        </form>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {notes.map((note) => (
            <div className="row justify-content-center">
            <Card
            className="col-sm-10 col-md-10 col-lg-10"

              style={{
                textAlign: "center",
                display: "flex",
                backgroundColor: "beige",
              }}
              key={note.id}
            >
                            <div className="row justify-content-center">

                <Card             className="col-sm-8 col-md-8 col-lg-8" style={{
                    backgroundColor:"#ffffc1"
                }}
>
              <br />
              <Card.Title>
              <h3><strong>{note.title}</strong></h3></Card.Title>
              <Card.Text><h6>{note.text}</h6></Card.Text>
              
              <br />
              {/* <button class="my-button-create" ><strong>SUBMIT EDIT</strong></button>
            <button
              class="my-button"
              onClick={() => {
                deleteNote();
              }}
            >
              <strong>DELETE BOOK</strong>
            </button> */}
          </Card>
          </div>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
