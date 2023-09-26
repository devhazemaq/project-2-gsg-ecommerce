import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import productsSlice from "./slices/productsHaz";
import outdoorsSlice from "./slices/outdoors";
import recommendedSlice from "./slices/recommended";
import listproductsSlice from "./slices/listproducts";
import relatedSlice from "./slices/related";
import youmaylikeSlice from "./slices/youmaylike";
import mycartSlice from "./slices/mycart";

// import  productsSlice from './slices/products'

export default configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
    outdoors: outdoorsSlice,
    recommended: recommendedSlice,
    listproducts: listproductsSlice,
    related: relatedSlice,
    youmaylike: youmaylikeSlice,
    mycart: mycartSlice,
  },
});
