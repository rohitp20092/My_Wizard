import React from "react";
import "../App.css";
import StepperView from "./StepperView";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInformations, setAddsubgenreData } from "../action";

import {
  authorsData,
  bookFormatData,
  editionLanguageData,
  publicationData,
} from "../informationData";

export default function Information(props) {
  const { toast } = props;
  const select = useSelector((state) => state.information);
  const selectdesc = useSelector((state) => state.book);
 
  const {
    title,
    author,
    isbn,
    publisher,
    datePublisher,
    numberOfPagers,
    format,
    edition,
    editionLanguage,
    description,
  } = select.info;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onTextChange = (e) => {
    dispatch(
      setInformations({ ...select.info, [e.target.name]: e.target.value })
    );
  };
  const handleBack = () => {
    navigate("/sub-genre");
    dispatch(setAddsubgenreData(false));
  };
 
  const onSubmit = () => {
    if (title == "") {
      toast.error("Enter Book Title");
    } else if (isbn == "") {
      toast.error("Enter ISBN");
    } else if (datePublisher == "") {
      toast.error("Select Date Published");
    } else if (edition == "") {
      toast.error("Enter Edition");
    } else if (selectdesc.subGenres.isDescriptionRequired && description==="") {
      toast.error("Enter description");
    } else {
      navigate("/success");
    }
  };

  return (
    <div className="information-view">
      <p>Add Book - New Book</p>
      <StepperView />
      <form className="form-container">
        <label>Book Title</label>
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={onTextChange}
        />
        <label>Author</label>
        <select
          onChange={(e) =>
            dispatch(
              setInformations({ ...select.info, author: e.target.value })
            )
          }
          value={author}
        >
          {authorsData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
        <label>ISBN</label>
        <input
          value={isbn}
          type="text"
          name="isbn"
          placeholder="ISBN"
          onChange={onTextChange}
        />
        <label>Publisher</label>
        <select
          onChange={(e) =>
            dispatch(
              setInformations({ ...select.info, publisher: e.target.value })
            )
          }
          value={publisher}
        >
          {publicationData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>

        <label>Date Published</label>
        <input
          value={datePublisher}
          type="date"
          name="datePublisher"
          placeholder="Date Published"
          onChange={onTextChange}
        />
        <label>Number of pages</label>
        <input
          value={numberOfPagers}
          type="number"
          min={1}
          name="numberOfPagers"
          placeholder="Number of Pages"
          onChange={onTextChange}
        />
        <label>Format</label>
        <select
          onChange={(e) =>
            dispatch(
              setInformations({ ...select.info, format: e.target.value })
            )
          }
          value={format}
        >
          {bookFormatData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
        <div className="row">
          <div>
            <label>Edition</label>
            <input
              value={edition}
              type="text"
              name="edition"
              placeholder="Edition"
              onChange={onTextChange}
            />
          </div>
          <div>
            <label>Edition Language</label>
            <select
              className="row-select"
              onChange={(e) =>
                dispatch(
                  setInformations({
                    ...select.info,
                    editionLanguage: e.target.value,
                  })
                )
              }
              value={editionLanguage}
            >
              {editionLanguageData.map((value) => (
                <option key={value.name} value={value.name}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label>Description</label>
        <textarea
          value={description}
          type="text"
          name="description"
          placeholder="Edition"
          onChange={onTextChange}
        />
      </form>
      <div className="button-view">
        <button onClick={handleBack} className="prev-btn">
          {"< Back"}
        </button>
        <button onClick={() => onSubmit()} className="next-btn">
          {"Add "}
        </button>
      </div>
    </div>
  );
}
