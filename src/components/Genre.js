import React from "react";
import "../App.css";
import StepperView from "./StepperView";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGenreData } from "../action";
export default function Genre(props) {
  const { genreData, toast } = props;
  const dispatch = useDispatch();
  const select = useSelector((state) => state.book);
  const navigate = useNavigate();
  const onSelectGenre = (item) => {
    dispatch(setGenreData(item));
  };

  const isSelected = (item) => {
    return (
      "grid-item " +
      (select && select.genre?.id == item.id ? "selected-item" : "")
    );
  };

  const handleSubmit = () => {
    if (select.genre) {
      navigate("/sub-genre");
    } else {
      toast.error("Select Genre");
    }
  };
  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepperView />
      <div className="grid-layout">
        {genreData.map((item, index) => {
          return (
            <button
              key={index}
              className={isSelected(item)}
              onClick={() => onSelectGenre(item)}
            >
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
      <div className="button-view">
      <button onClick={() => navigate("/")} className="prev-btn">
          {"< Back"}
        </button>
        <button onClick={handleSubmit} className="next-btn">
          {"Next "}
        </button>
      </div>
    </div>
  );
}
