import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Genre from "./components/Genre";
import SubGenre from "./components/SubGenre";
import AddNewSubGenre from "./components/AddNewSubGenre";
import Information from "./components/Information";
import Success from "./components/Success";
import { genreData } from "./appData";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Genre toast={toast} genreData={genreData}/>} />
          <Route path="/sub-genre" element={<SubGenre toast={toast} genreData={genreData} />} />
          <Route
            path="/add-new-subgenre"
            element={<AddNewSubGenre toast={toast} genreData={genreData} />}
          />
          <Route path="/information" element={<Information toast={toast} genreData={genreData}/>} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
