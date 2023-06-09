import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTravelBook() {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/travels/", {
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
