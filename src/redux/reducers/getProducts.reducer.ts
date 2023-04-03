import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import getProductsAction from "../actions/getProducts.action";

 const getProductSlice = createSlice({
  name: "product",
  initialState: {
    products: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAction.fulfilled, (state, {payload}) => {
      state.products=payload
    });
  },
});

export default getProductSlice;