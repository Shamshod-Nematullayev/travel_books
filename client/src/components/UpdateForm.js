import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateForm() {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const getBook = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/travels/${params.id}`
    );
    const book = response.data.travel;
    setTitle(book.title);
    setDescr(book.descr);
    setImage(book.image);
  };
  useEffect(() => {
    getBook();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/travels/${params.id}`, {
      title,
      descr,
      image,
    });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          required
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit my-3" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
