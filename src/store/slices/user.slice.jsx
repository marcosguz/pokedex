import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
    initialState: 'Marcos',
    reducers: {
        
    }
})

export const {  } = userSlice.actions;

export default userSlice.reducer;