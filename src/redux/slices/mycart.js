import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const mycartSlice = createSlice({
  name: "mycart",
  initialState: {
    mycart: [],
    isLoading: false,
    errorMassege: "",
    product: null,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getAllProducts: (state, action) => {
      state.mycart = action.payload;

      state.isLoading = false;
      state.errorMassege = "";
    },
    getSingleProduct: (state, action) => {
      state.mycart = action.payload;
    },
    setError: (state, action) => {
      state.errorMassege = action.payload;
      state.isLoading = false;
      state.errorMassege = "";
    },
    editProduct: (state, action) => {
      state.mycart = state.mycart.map((product) =>
        product.id === state.payload.id ? action.payload : product
      );
    },

    deleteProduct: (state, action) => {
      state.mycart = state.mycart.filter(
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
} = mycartSlice.actions;

export const getMycartAction = (URL_PATH_DYNAMIC) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`${URL_PATH_DYNAMIC}`);

    dispatch(getAllProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error.message);
  }
};

export const deleteProductInMycartAction = (URL_PATH_DYNAMIC, id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.delete(`${URL_PATH_DYNAMIC}${id}`);
    dispatch(deleteProduct(id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default mycartSlice.reducer;


