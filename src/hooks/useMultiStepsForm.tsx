import { useState, ReactNode } from 'react';

const useMultiStepsForm = (steps: ReactNode[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const next = () => {
		setCurrentStepIndex(i => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	};

	const back = () => {
		setCurrentStepIndex(i => {
			if (i <= 0) return i;
			return i - 1;
		});
	};
	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		next,
		back,
		steps,
	};
};

export default useMultiStepsForm;
