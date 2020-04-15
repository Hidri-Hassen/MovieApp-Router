import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionType.js"
import { v4 as uuidv4 } from 'uuid';

export const addMovie = payload => {
  return {
    type: ADD_MOVIE,
    payload:{
        ...payload,
        id:uuidv4()
    }
  };
  
};

export const deleteMovie = payload => {
  return {
    type: DELETE_MOVIE,
    payload

  };
  
};

export const editMovie = payload => {
  return {
    type: EDIT_MOVIE,
    payload
  };
  
};