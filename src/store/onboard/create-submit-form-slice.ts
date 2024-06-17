import type { StateCreator } from "zustand";

type SubmitFormSlice = {
	isSubmitted: boolean;
	onSubmit: () => void;
};

const createSubmitFormSlice: StateCreator<SubmitFormSlice> = (set) => ({
	isSubmitted: false,
	onSubmit: (): void => {
		set((state) => ({ ...state, isSubmitted: !state.isSubmitted }));
	},
});

export default createSubmitFormSlice;
export type { SubmitFormSlice };
