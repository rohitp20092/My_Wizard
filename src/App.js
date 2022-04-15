import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Genre from "./components/Genre";
import SubGenre from "./components/SubGenre";
import AddNewSubGenre from "./components/AddNewSubGenre";
import Information from "./components/Information";
import Success from "./components/Success";


function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Genre toast={toast} />} />
          <Route path="/sub-genre" element={<SubGenre toast={toast} />} />
          <Route
            path="/add-new-subgenre"
            element={<AddNewSubGenre toast={toast} />}
          />
          <Route path="/information" element={<Information toast={toast} />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
