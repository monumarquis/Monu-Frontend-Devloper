import axios from "axios";
import {
  CAPSULES_ERROR,
  CAPSULES_REQUEST,
  CAPSULES_SUCCESS,
} from "./capsules.types";

export const getCapsules = (url) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer 2wqd`,
    },
  };
  dispatch({
    type: CAPSULES_REQUEST,
  });
  try {
    const { data } = await axios.get(url, config);
    // console.log(data);
    return dispatch({
      type: CAPSULES_SUCCESS,
      payload: data,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    console.log(message);
    return dispatch({
      type: CAPSULES_ERROR,
      payload: message,
    });
  }
};
