import { createSlice } from "@reduxjs/toolkit";


export const coursSortFilDataSlice = createSlice({
    name: 'coursSortFilData',
    initialState: {
        Query: '',
        PageNumber: 1,
        SortingCol: "Active",
        SortType: "DESC",
        CostDown: '',
        CostUp: '',
        ListTech: '',
        courseLevelId: '',
        CourseTypeId: '',
        StartDate: '',
        EndDate: '',
        TeacherId: '',
        totalCount: '',
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
        giveCostDown: (state, action) => {
            state.CostDown = action.payload;
        },
        giveCostUp: (state, action) => {
            state.CostUp = action.payload;
        },
        giveListTech: (state, action) => {
            state.ListTech = action.payload;
        },
        giveCourseLevelId: (state, action) => {
            state.courseLevelId = action.payload;
        },
        giveCourseTypeId: (state, action) => {
            state.CourseTypeId = action.payload;
        },
        giveStartDate: (state, action) => {
            state.StartDate = action.payload;
        },
        giveEndDate: (state, action) => {
            state.EndDate = action.payload;
        },
        giveTeacherId: (state, action) => {
            state.TeacherId = action.payload;
        },
        giveTotalCount: (state, action) => {
            state.totalCount = action.payload;
        }
    }
})

export const { giveCourseTypeId, giveCourseLevelId, giveTeacherId, giveCostUp, giveCostDown } = coursSortFilDataSlice.actions;