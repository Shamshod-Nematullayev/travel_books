import React from "react";

export default function AddTravelBook() {
  return (
    <form>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" className="form-control" id="imageUrl" />
      </div>
      <button type="submit my-3" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
