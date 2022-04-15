import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setSubgenreData,
  setAddsubgenreData,
  setInformations,
  setGenreData,
  setSubgenres,
} from "../action";

export default function Success() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector((state) => state.information);
  const select1 = useSelector((state) => state.book);
  const infoInitialState = {
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    datePublisher: "",
    numberOfPagers: "",
    format: "",
    edition: "",
    editionLanguage: "",
    description: "",
  };
  useEffect(() => {
    console.log("Book Added :", select.info, select1);
  }, []);

  const handleAddBook = () => {
    dispatch(setInformations(infoInitialState));
    dispatch(setGenreData(null));
    dispatch(setSubgenreData(null));
    dispatch(setAddsubgenreData(false));
    dispatch(
      setSubgenres({
        name: "",
        isDescriptionRequired: false,
      })
    );

    navigate("/");
  };
  return (
    <div className="content">
      <div className="align-center">
        <h2>Book Added Successfully</h2>
        <button onClick={handleAddBook} className="done-btn">
          Add Another Book
        </button>
      </div>
    </div>
  );
}
