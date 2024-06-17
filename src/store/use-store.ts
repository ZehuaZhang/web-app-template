import { create } from "zustand";
import type { PersonalInfoSlice } from "./onboard/create-personal-info-slice";
import {
	createPersonalInfoSlice,
	createStepSlice,
	createSubmitFormSlice,
} from "./onboard";
import type { StepSlice } from "./onboard/create-step-slice";
import type { SubmitFormSlice } from "./onboard/create-submit-form-slice";

const useStore = create<PersonalInfoSlice & StepSlice & SubmitFormSlice>()(
	(...a) => ({
		...createPersonalInfoSlice(...a),
		...createStepSlice(...a),
		...createSubmitFormSlice(...a),
	})
);

export default useStore;
