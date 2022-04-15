import React, { useState } from "react";
import "../App.css";
import StepperView from "./StepperView";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSubgenres, setSubgenreData, setAddsubgenreData } from "../action";

export default function AddNewSubGenre(props) {
  const { genreData, toast } = props;
  const [genre, setGenre] = useState(genreData);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.book);

  const navigate = useNavigate();
  const onClickNext = () => {
    if (select.subGenres.name == "") {
      toast.error("Enter Name");
    } else {
      let length = select.genre.subgenres.length;
      let lastId = select.genre.subgenres[length - 1].id;
      let newSubgenre = {
        id: lastId + 1,
        ...select.subGenres,
      };
      let index = genreData.findIndex((ele) => ele.id == select.genre.id);
      let genres = genreData;
      genres[index].subgenres.push(newSubgenre);

      dispatch(setSubgenreData(newSubgenre));
      setGenre(genres);

      navigate("/information");
    }
  };
  const addSubgenreData = () => {
    
    dispatch(setAddsubgenreData(false));
    navigate("/sub-genre");
   
  };

  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepperView />
      <div className="form-container">
        <input
          type="text"
          placeholder="Subgenre name"
          value={select.subGenres.name}
          name="name"
          onChange={(e) =>
            dispatch(
              setSubgenres({
                ...select.subGenres,
                [e.target.name]: e.target.value,
              })
            )
          }
        />
        <label>
          <input
            type={"checkbox"}
            value={select.subGenres.isDescriptionRequired}
            onChange={() =>
              dispatch(
                setSubgenres({
                  ...select.subGenres,
                  isDescriptionRequired: !select.subgenre.isDescriptionRequired,
                })
              )
            }
          />
          <p> Description is required for this subgenre</p>
        </label>
      </div>
      <div className="button-view">
        <button onClick={addSubgenreData} className="prev-btn">
          {"< Back"}
        </button>
        <button onClick={() => onClickNext()} className="next-btn">
          {"Next "}
        </button>
      </div>
    </div>
  );
}
