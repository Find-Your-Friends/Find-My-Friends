import React, { useState } from "react";
import { Button, Card, Typography, Progress } from "@material-tailwind/react";
import initialData from "./Multi-Form/InitialData";
import Form1 from "./Multi-Form/Form1";
import Form2 from "./Multi-Form/Form2";
import Form3 from "./Multi-Form/Form3";
import useStepNavigator from "./Multi-Form/StepNavigator";

export default function PersonalInfo() {
  const [formData, setFormData] = useState(initialData);
  const steps = [
    <Form1 formData={formData} setFormData={setFormData} />,
    <Form2 formData={formData} setFormData={setFormData} />,
    <Form3 formData={formData} setFormData={setFormData} />,
  ];
  const {
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    nextStep,
    goTo,
    prevStep,
  } = useStepNavigator(steps);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isLastStep) {
      nextStep();
    } else {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100"
    style={{
        backgroundImage: `url(https://shorturl.at/2MBDs)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-white">
        <Typography variant="h4" className="text-center mb-6">
          {/* {isLastStep ? "Almost Done" : "We Need A Bit More From You"} */}
          {isFirstStep ? "We Need A Bit More From You" : (!isFirstStep && !isLastStep)? "Youre Halfway There" : "Almost Done"}
        </Typography>
        <Progress value={(currentStepIndex + 1) / steps.length * 100} className="mb-6" />
        <form onSubmit={handleSubmit}>
          <div className="mb-6">{step}</div>
          <div className="flex justify-between">
            {!isFirstStep && (
              <Button
                variant="outlined"
                color="blue"
                className="flex items-center gap-2"
                type="button"
                onClick={prevStep}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Prev
              </Button>
            )}

            <Button
              variant="gradient"
              color="blue"
              className="flex items-center gap-2 ml-auto"
              type="submit"
            >
              {isLastStep ? "Finish" : "Next"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}