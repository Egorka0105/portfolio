import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../core/interfaces';

const initialState: IInitialState = {
	mobileIsOpen: false,
	contactIsOpen: false,
};

const myPortfolio = createSlice({
	name: 'myPortfolio',
	initialState,
	reducers: {
		changeMobileIsOpen(state) {
			state.mobileIsOpen = !state.mobileIsOpen;
		},
		checkContactClick(state, action: PayloadAction<boolean>) {
			state.contactIsOpen = action.payload;
		},
	},
});

export const { changeMobileIsOpen, checkContactClick } = myPortfolio.actions;
export default myPortfolio.reducer;
