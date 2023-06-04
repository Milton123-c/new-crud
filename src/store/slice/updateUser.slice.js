import {createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'updateUser',
    initialState :  null,
    reducers : {
        addUser : (state, action ) => action.payload
    }
})

export const {addUser} = slice.actions;

export default slice.reducer;