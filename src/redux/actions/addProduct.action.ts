import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api"
import { axiosErrHandle, axiosResHandle } from "../../api/axiosHandle"

export const addProductService = async ( body :any) => {

    return server.post(`http://localhost:5000/products/addproduct`, body);
};
const addProductAction = createAsyncThunk("delete/videolibrary/video", async (body:any, thunkAPI) => {
    try {
  
        const res = await addProductService(body);
        return axiosResHandle(res.data.data);
    } catch (err) {
        return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
});

export default addProductAction;

