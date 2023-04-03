import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api"
import { axiosErrHandle, axiosResHandle } from "../../api/axiosHandle"

export const getProductsService = async(search: any) => {

    return server.get(`http://localhost:5000/products/getproducts?search=${search}`);
};

const getProductsAction = createAsyncThunk("delete/videolibrary/video", async (search:any, thunkAPI) => {
    try {
  console.log("search", search)
        const res = await getProductsService(search);
        return axiosResHandle(res);
    } catch (err) {
        return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
});

export default getProductsAction;

