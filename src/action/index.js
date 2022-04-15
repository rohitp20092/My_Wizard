export const GENREDATA = "GENREDATA";
export const SUBGENREDATA = "SUBGENREDATA";
export const ADDNEWSUBGENRE="ADDNEWSUBGENRE";
export const INFORMATION="INFORMATION";
export const SUBGENERS="SUBGENERS";

export const setGenreData = (payload) => ({
    type: GENREDATA,
    payload,
  });
  export const setSubgenreData = (payload) => ({
    type: SUBGENREDATA,
    payload,
  });
  export const setAddsubgenreData = (payload) => ({
    type: ADDNEWSUBGENRE,
    payload,
  });
  export const setInformations = (payload) => ({
    type: INFORMATION,
    payload,
  });
  export const setSubgenres = (payload) => ({
    type: SUBGENERS,
    payload,
  });