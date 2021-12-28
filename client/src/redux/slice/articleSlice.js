import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiArticle from "../../services/api/apiArticle";

const initialState = {
  loading: false,
  listArticles: [],
  error: null,
};
export const getListArticles = createAsyncThunk(
    "article/fetchList",
    async () => {
      const res = await apiArticle.getListsArticles();
      return res.data;
    }
  );
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducer: {},
  extraReducers: (builder)=>{
      builder.addCase(getListArticles.pending, (state, action)=>{
        state.loading = true
      })
      builder.addCase(getListArticles.fulfilled, (state, action) => {
          state.loading = false
          console.log("action: " ,  action)
          state.listArticles = action.payload
      })
  },
});
export const selectArticle= state => state.article
export default articleSlice.reducer;
