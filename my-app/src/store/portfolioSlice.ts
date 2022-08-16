import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import content from 'core/content.json';
import { IInitialState } from '../core/interfaces';

const initialState: IInitialState = {
	skills: content.skills,
	mobileIsOpen: false,
	formClickSend: false,
};

const myPortfolio = createSlice({
	name: 'myPortfolio',
	initialState,
	reducers: {
		changeMobileIsOpen(state) {
			state.mobileIsOpen = !state.mobileIsOpen;
		},
		changeFormClickSend(state, action: PayloadAction<boolean>) {
			state.formClickSend = action.payload;
		},
	},
});

export const { changeMobileIsOpen, changeFormClickSend } = myPortfolio.actions;
export default myPortfolio.reducer;
