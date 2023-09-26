import { API_URL } from "@/config/api";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {API_URL_OFFERS } from "@/config/api";

export const listlistproductsSlice = createSlice({
  name: "listlistproducts",
  initialState: {
    listproducts: [],
    isLoading: false,
    errorMassege: "",
    listproduct: [],
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getAllProducts: (state, action) => {
      state.listproducts = action.payload;

      state.isLoading = false;
      state.errorMassege = "";
    },
    getSingleProduct: (state, action) => {
      state.listproduct = action.payload;
      state.isLoading = false;
      state.errorMassege = "";
    },
    setError: (state, action) => {
      state.errorMassege = action.payload;
      state.isLoading = false;
      state.errorMassege = "";
    },
    editProduct: (state, action) => {
      state.listproducts = state.listproducts.map((product) =>
        product.id === state.payload.id ? action.payload : product
      );
    },

    deleteProduct: (state, action) => {
      state.listproducts = state.listproducts.filter(
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
} = listlistproductsSlice.actions;

export const getListlistproductsAction =
  (URL_PATH_DYNAMIC) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(`${URL_PATH_DYNAMIC}`);

      dispatch(getAllProducts(data));
    } catch (error) {
      dispatch(setError(error.message));
      console.log(error.message);
    }
  };

export const getSinglelistproductsAction =
  (URL_PATH_DYNAMIC, id) => async (dispatch) => {
    try {
      dispatch(setLoading);
      const { data } = await axios.get(`${URL_PATH_DYNAMIC}${+id}`);
      dispatch(getSingleProduct(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export default listlistproductsSlice.reducer;

// const handleDeletaProudect = (id) => {deleteProductAction(id)}
// <button onClick={(e)=>{
//   e.stopPropagation();
//   handleDeletaProudect(product.id);
// }} >delete7az</button>

// const handleEditProudect = (e) => {
//   e.preventDefault();
//   dispatch(editProductAction(productData))
//   setProductData(null);
// }
// <button onClick={(e)=>{
//   e.stopPropagation();
//   setPostData(post);
// }} >edit7az</button>

// export const addProductAction = (data) => async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     await axios.post(`http://localhost:3003/posts`, data);
//     dispatch(addProduct(data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };
