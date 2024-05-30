import React from "react";
import { Input, Radio } from "@material-tailwind/react";

export default function Form3({ formData, setFormData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialPreferences: {
        ...prevFormData.socialPreferences,
        [name]: value,
      },
    }));
  }

  return (
    <div className="flex flex-col gap-5">
      <Radio name="preferredGroupSize" label="Small" value="Small" checked={formData.socialPreferences.preferredGroupSize === "Small"} onChange={handleChange} />
      <Radio name="preferredGroupSize" label="Medium" value="Medium" checked={formData.socialPreferences.preferredGroupSize === "Medium"} onChange={handleChange} />
      <Radio name="preferredGroupSize" label="Large" value="Large" checked={formData.socialPreferences.preferredGroupSize === "Large"} onChange={handleChange} />
      <Input name="typesOfEvents" label="Types of Events" value={formData.socialPreferences.typesOfEvents.join(", ")} onChange={handleChange} />
      <Radio name="frequencyOfSocialising" label="Rarely" value="Rarely" checked={formData.socialPreferences.frequencyOfSocialising === "Rarely"} onChange={handleChange} />
      <Radio name="frequencyOfSocialising" label="Occasionally" value="Occasionally" checked={formData.socialPreferences.frequencyOfSocialising === "Occasionally"} onChange={handleChange} />
      <Radio name="frequencyOfSocialising" label="Often" value="Often" checked={formData.socialPreferences.frequencyOfSocialising === "Often"} onChange={handleChange} />
      <Radio name="frequencyOfSocialising" label="Very often" value="Very often" checked={formData.socialPreferences.frequencyOfSocialising === "Very often"} onChange={handleChange} />
      <Radio name="comfortLevel" label="Introverted" value="Introverted" checked={formData.socialPreferences.comfortLevel === "Introverted"} onChange={handleChange} />
      <Radio name="comfortLevel" label="Ambivert" value="Ambivert" checked={formData.socialPreferences.comfortLevel === "Ambivert"} onChange={handleChange} />
      <Radio name="comfortLevel" label="Extroverted" value="Extroverted" checked={formData.socialPreferences.comfortLevel === "Extroverted"} onChange={handleChange} />
      <Radio name="eventPreference" label="Male" value="Male" checked={formData.socialPreferences.eventPreference === "Male"} onChange={handleChange} />
      <Radio name="eventPreference" label="Female" value="Female" checked={formData.socialPreferences.eventPreference === "Female"} onChange={handleChange} />
      <Radio name="eventPreference" label="Mix" value="Mix" checked={formData.socialPreferences.eventPreference === "Mix"} onChange={handleChange} />
    </div>
  );
}


// 1. Preferred Group Size: Small, medium, or large gatherings.
// 2. Types of Events: Casual meetups, professional networking, hobby-based gatherings, etc.
// 3. Frequency of Socialising: Rarely, occasionally, often, very often
// 4. Comfort Level: Introverted, ambivert, extroverted.
// 5. need to allow users to select event preference(open to males ,females, mix)
//     1. a gender cannot choose the same gender