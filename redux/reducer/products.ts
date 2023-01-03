import { createSlice} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState} from "../store/store";


const initialState:any = [];

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductData:(state, action) => {
           return [action.payload, state]
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
             return [action.payload, state]
        }
    } 
})

export const getProductSelector = (state: AppState) => state.product
export const {setProductData} = ProductSlice.actions
export default ProductSlice.reducer