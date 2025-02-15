import type { StateCreator } from "zustand";

type StepSlice = {
	step: number;
	increaseStep: (step: number) => void;
	decreaseStep: (step: number) => void;
};

const createStepSlice: StateCreator<StepSlice> = (set) => ({
	step: 1,
	increaseStep: (step): void => {
		set((state) => ({ ...state, step: step + 1 }));
	},
	decreaseStep: (step): void => {
		set((state) => ({ ...state, step: step - 1 }));
	},
});

export default createStepSlice;
export type { StepSlice };
