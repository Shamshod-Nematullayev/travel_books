import { Route, Routes } from "react-router-dom";
import AddTravelBook from "./components/AddTravelBook";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/add" element={<AddTravelBook />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
