import { API_URL } from "@/config/api";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {API_URL_OFFERS } from "@/config/api";


export const outdoorsSlice = createSlice({
  name: "outdoors",
  initialState: {
    outdoors: [],
    isLoading: false,
    errorMassege: "",
    product: null,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getAllOutdoors: (state, action) => {
      state.outdoors = action.payload;

      state.isLoading = false;
      state.errorMassege = "";
    },
    getSingleOutdoor: (state, action) => {
      state.outdoors = action.payload;
    },
    setError: (state, action) => {
      state.errorMassege = action.payload;
      state.isLoading = false;
      state.errorMassege = "";
    },
    editOutdoor: (state, action) => {
      state.outdoors = state.outdoors.map((product) =>
        product.id === state.payload.id ? action.payload : product
      );
    },

    deleteOutdoor: (state, action) => {
      state.outdoors = state.outdoors.filter(
        (product) => product.id !== action.payload
      );
      state.errorMassege = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllOutdoors,
  setLoading,
  setError,
  editOutdoor,
  deleteOutdoor,
  getSingleOutdoor,
} = outdoorsSlice.actions;

export const getOutdoorsAction = (URL_PATH_DYNAMIC) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`${URL_PATH_DYNAMIC}`);

    dispatch(getAllOutdoors(data));
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error.message);
  }
};


export default outdoorsSlice.reducer;

