import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upComingMovie:null,
        toggle:false,
        trailerMovie:null,
        open:false
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovie:(state, action) => {
            state.topRatedMovie = action.payload;
        },
        getUpComingMovie:(state, action) => {
            state.upComingMovie = action.payload;
        },
        setToggle:(state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen:(state, action) => {
            state.open = action.payload;
        }
        
    }
})
export const { getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpComingMovie, setToggle, getTrailerMovie, setOpen } = movieSlice.actions;
export default movieSlice.reducer;