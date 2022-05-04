import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState} from "../core/interfaces";


const initialState: IInitialState = {
    isModalNavAnimationOpen: false
}

const myPortfolio = createSlice({
    name: "myPortfolio",
    initialState,
    reducers: {
        modalNavAnimationOpen(state, action: PayloadAction<boolean>) {
            state.isModalNavAnimationOpen = action.payload;
        }

    }
})

export const {modalNavAnimationOpen} = myPortfolio.actions;
export default myPortfolio.reducer;
