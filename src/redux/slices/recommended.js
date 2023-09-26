import { API_URL } from "@/config/api";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {API_URL_OFFERS } from "@/config/api";

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: {
    products: [],
    isLoading: false,
    errorMassege: "",
    product: null,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getAllProducts: (state, action) => {
      state.products = action.payload;

      state.isLoading = false;
      state.errorMassege = "";
    },
    getSingleProduct: (state, action) => {
      state.products = action.payload;
    },
    setError: (state, action) => {
      state.errorMassege = action.payload;
      state.isLoading = false;
      state.errorMassege = "";
    },
    editProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === state.payload.id ? action.payload : product
      );
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.errorMassege = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllProducts,
  setLoading,
  setError,
  editProduct,
  deleteProduct,
  getSingleProduct,
} = recommendedSlice.actions;

export const getrecommendedAction = (URL_PATH_DYNAMIC) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`${URL_PATH_DYNAMIC}`);

    dispatch(getAllProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error.message);
  }
};


export default recommendedSlice.reducer;

