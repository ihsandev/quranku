import axios from "axios";
import ActionTypes from "../types";
import { API_CHAPTER } from "Api";

export const useActions = (state, dispatch) => {
  function getChapters() {
    return new Promise((resolve, reject) => {
      axios
        .get(API_CHAPTER)
        .then(res => {
          if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_CHAPTERS, response: res.data });
          }
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return {
    getChapters
  };
};
