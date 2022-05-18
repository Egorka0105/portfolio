import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState} from "../core/interfaces";
import content from "core/content.json"


const initialState: IInitialState = {

    skills: content.skills,
    mobileIsOpen: false,
}

const myPortfolio = createSlice({
    name: "myPortfolio",
    initialState,
    reducers: {
        changeMobileIsOpen(state) {
            state.mobileIsOpen = !state.mobileIsOpen
        }

    }
})

export const {changeMobileIsOpen} = myPortfolio.actions;
export default myPortfolio.reducer;
