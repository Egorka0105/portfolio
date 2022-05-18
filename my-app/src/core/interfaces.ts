import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from 'store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export interface IInitialState {
    skills: ISkills;
    mobileIsOpen: boolean;
}

export interface ISkills {
    textAboutSkills: string;
    allSkillsMap: ISkill[];
    experience: IExperienceItem[];
}

export interface ISkill {
    key: string;
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

