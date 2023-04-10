import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        isUpdate: false,
        users:{},
        notes:[]
    },
    reducers:{
        changeLoading: (state, action) =>{
            state.isLoading = action.payload
        },
        changeDataUsers: (state, action) => {
            state.users = action.payload
        },
        updateNote: (state, action) => {
            state.notes = action.payload
        },
        changeUpdate: (state,action) =>{
            state.isUpdate = action.payload
        }
    }
})

export const {changeLoading, changeDataUsers, updateNote, changeUpdate} = Reducer.actions
export default Reducer.reducer
