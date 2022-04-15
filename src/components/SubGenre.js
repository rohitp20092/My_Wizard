import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSubgenreData, setAddsubgenreData } from "../action";
import StepperView from "./StepperView";

export default function SubGenre(props) {
  const { genreData, toast } = props;
  const dispatch = useDispatch();
  const select = useSelector((state) => state.book);
  const navigate = useNavigate();

  const onSubgenreSelect = (item) => {
    dispatch(setSubgenreData(item));
    dispatch(setAddsubgenreData(false));
  };

  const isSelected = (item) => {
    return (
      "grid-item " +
      (select && select.subgenre?.id == item.id ? "selected-item" : "")
    );
  };

  const getSubGenreByGenre = () => {
    if (select && select?.genre) {
      let genre = genreData.find((ele) => ele.id == select.genre.id);

      return genre?.subgenres;
    } else {
      return [];
    }
  };
  const onSelectedItem = () => {
    dispatch(setAddsubgenreData(true));
    dispatch(setSubgenreData(undefined));
  };
  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepperView />
      <div className="grid-layout">
        {genreData && select
          ? getSubGenreByGenre().map((item) => {
              return (
                <button
                  key={item.name}
                  className={isSelected(item)}
                  onClick={() => onSubgenreSelect(item)}
                >
                  <p>{item.name}</p>
                </button>
              );
            })
          : null}
        <button
          className={
            "grid-item" + (select.addNewSubgenre ? " selected-item" : "")
          }
          onClick={onSelectedItem}
        >
          <p>Add New</p>
        </button>
      </div>
      <div className="button-view">
        <button onClick={() => navigate("/")} className="prev-btn">
          {"< Back"}
        </button>
        <button
          onClick={() => {
            if (select.addNewSubgenre) {
              navigate("/add-new-subgenre");
            } else if (select.subgenre) {
              navigate("/information");
            } else {
              toast.error("Select Sub-genre");
            }
          }}
          className="next-btn"
        >
          {"Next "}
        </button>
      </div>
    </div>
  );
}
