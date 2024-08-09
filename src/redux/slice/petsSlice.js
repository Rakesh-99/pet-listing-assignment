import { createSlice } from '@reduxjs/toolkit';




const petSlice = createSlice({

    name: 'petSlice',
    initialState: {
        isLoading: false,
        error: null,
        pets: null
    },
    reducers: {
        getPetsPending: (state) => {
            state.isLoading = true;
            state.error = null
        },
        getPetsSuccess: (state, action) => {
            state.isLoading = false;
            state.pets = action.payload;
            state.error = null
        },
        getPetsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default petSlice.reducer;
export const { getPetsPending, getPetsSuccess, getPetsFailure } = petSlice.actions;