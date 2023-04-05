import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ISkill {
	name: string;
	levelPercent: string;
}

export interface IExperienceItem {
	key: string;
	companyName: string;
	dayStart: string;
	dayFinish: string;
	location: string;
	position: string;
}

export interface IInitialState {
	mobileIsOpen: boolean;
	contactIsOpen: boolean;
}

export type BannerTitleElement = string[] | string;
export type BannerTitle = BannerTitleElement[];
