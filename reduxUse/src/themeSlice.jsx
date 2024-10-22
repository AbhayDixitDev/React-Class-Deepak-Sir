import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        bgcol: "black",
        pcol:"green"
    },
    reducers: {
             changetheme: (state) => {
                state.bgcol = "green";
    },
    previostheme: (state) => {
        state.bgcol = "black";
    },
    }
});

export const { changetheme, previostheme } = themeSlice.actions;  
export default themeSlice.reducer;