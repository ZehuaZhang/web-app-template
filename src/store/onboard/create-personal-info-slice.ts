import type { StateCreator } from "zustand";

type PersonalInfo = {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
};

type PersonalInfoSlice = {
	personalInfo: PersonalInfo;
	setPersonalInfo: (data: PersonalInfo) => void;
};

const initialState = {
	firstname: "",
	lastname: "",
	email: "",
	phone: "",
};

const createPersonalInfoSlice: StateCreator<PersonalInfoSlice> = (set) => ({
	personalInfo: initialState,
	setPersonalInfo: (data): void => {
		set((state) => ({ personalInfo: { ...state.personalInfo, ...data } }));
	},
});

export default createPersonalInfoSlice;
export type { PersonalInfo, PersonalInfoSlice };
