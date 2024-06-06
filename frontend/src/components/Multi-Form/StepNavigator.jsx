import React, {useState} from "react";

export default function useStepNavigator(steps){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const nextStep = () => {
        if (currentStepIndex < steps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1);
        }
      };
    
      const prevStep = () => {
        if (currentStepIndex > 0) {
          setCurrentStepIndex(currentStepIndex - 1);
        }
      };
    
      const goToStep = (index) => {
        if (index >= 0 && index < steps.length) {
          setCurrentStepIndex(index);
        }
      };
    return{
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length-1,
        nextStep,
        goToStep,
        prevStep
    }

}