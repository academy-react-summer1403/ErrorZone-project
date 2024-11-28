import { createSlice } from "@reduxjs/toolkit";

export const newsSortFilDataSlice = createSlice({
  name: "newsSortFilData",
  initialState: {
    Query: "",
    PageNumber: 1,
    SortingCol: "Active",
    SortType: "DESC",
    NewsCategoryId: "",
    totalCount:'',
  },

  reducers: {
    searchCourse: (state, action) => {
      state.Query = action.payload;
    },
    changePage: (state, action) => {
      state.PageNumber = action.payload;
    },
    giveSortKey: (state, action) => {
      state.SortingCol = action.payload;
    },
    giveSortType: (state, action) => {
      state.SortType = action.payload;
    },
    giveNewsCategoryId: (state, action) => {
      state.NewsCategoryId = action.payload;
    },  
    giveTotalCount: (state, action) => {
        state.totalCount = action.payload;
    }  
  },
});

export const {searchCourse, changePage, giveSortKey, giveSortType, giveNewsCategoryId, giveTotalCount } = newsSortFilDataSlice.actions;
