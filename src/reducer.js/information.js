import { INFORMATION } from "../action";
const initialState = {
  info: {
    title: "",
    author: "J.K. Rowling",
    isbn: "",
    publisher: "Scholastic, Inc",
    datePublisher: "",
    numberOfPagers: "1",
    format: "EPUB",
    edition: "",
    editionLanguage: "English",
    description: "",
  },
};
export function information(state = initialState, action) {
  switch (action.type) {
    case INFORMATION:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
}

export default information;
