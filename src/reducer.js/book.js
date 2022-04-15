import { GENREDATA, SUBGENERS,SUBGENREDATA, ADDNEWSUBGENRE } from "../action";
 const initialState = {
  genre: null,
  subgenre: null,
  addNewSubgenre: false,
  subGenres:{
  name: "",
  isDescriptionRequired: false,
}
};

export function book(state = initialState, action) {
  switch (action.type) {
    case GENREDATA:
      return {
        ...state,
        genre: action.payload,
      };

    case SUBGENREDATA:
      return {
        ...state,
        subgenre: action.payload,
      };
    case ADDNEWSUBGENRE:
      return {
        ...state,
        addNewSubgenre: action.payload,
      };
    case SUBGENERS:
      return{
        ...state,
        subGenres:action.payload
      }
    default:
      return state;
  }
}

export default book;
