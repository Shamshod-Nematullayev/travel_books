import axios from "axios";
import e from "cors";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// wednesday rasimi
//https://i2-prod.ok.co.uk/incoming/article28619562.ece/ALTERNATES/s1200/1_1.jpg
export default function Main() {
  const [forDelete, setForDelete] = useState("");

  const [travelBooks, setTravelBooks] = useState([]);
  const getTravels = async () => {
    const travels = await axios.get("http://localhost:5000/api/travels");
    setTravelBooks(travels.data.travels);
  };
  useEffect(() => {
    getTravels();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:5000/api/travels/${forDelete}`)
      .then(() => {
        getTravels();
      });
  };

  return (
    <>
      {travelBooks.map((book) => (
        <div key={book._id} className="card mb-3">
          <img className="card-img-top" src={book.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.descr}</p>
            <div className="d-flex justify-content-start">
              <Link className="btn btn-primary mx-2" to={`/update/${book._id}`}>
                Update
              </Link>
              <form onSubmit={handleDelete}>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => setForDelete(book._id)}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
