import {
  CAPSULES_ERROR,
  CAPSULES_REQUEST,
  CAPSULES_SUCCESS,
} from "./capsules.types";

const initState = {
  loading: false,
  error: false,
  capsules: [],
  totalPages:null
};
export const capsulesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CAPSULES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        capsules: [],
        totalPages:null
      };
    }
    case CAPSULES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        capsules: [],
        totalPages:null
      };
    }
    case CAPSULES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        capsules: payload.capsules,
        totalPages:payload.totalPages
      };
    }

    default: {
      return state;
    }
  }
};
