import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";

export default function Form2({ formData, setFormData }) {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        interests: {
          ...prevFormData.interests,
          [name]: checked
            ? [...(prevFormData.interests[name] || []), value]
            : prevFormData.interests[name].filter((item) => item !== value),
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        interests: {
          ...prevFormData.interests,
          [name]: value.split(",").map((item) => item.trim()),
        },
      }));
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Checkbox
        name="sports"
        label="Sports"
        value="Sports"
        checked={formData.interests.sports?.includes("Sports")}
        onChange={handleChange}
      />
      <Checkbox
        name="arts"
        label="Arts"
        value="Arts"
        checked={formData.interests.arts?.includes("Arts")}
        onChange={handleChange}
      />
      <Checkbox
        name="music"
        label="Music"
        value="Music"
        checked={formData.interests.music?.includes("Music")}
        onChange={handleChange}
      />
      <Checkbox
        name="travel"
        label="Travel"
        value="Travel"
        checked={formData.interests.travel?.includes("Travel")}
        onChange={handleChange}
      />
      <Checkbox
        name="food"
        label="Food"
        value="Food"
        checked={formData.interests.food?.includes("Food")}
        onChange={handleChange}
      />
      <Checkbox
        name="technology"
        label="Technology"
        value="Technology"
        checked={formData.interests.technology?.includes("Technology")}
        onChange={handleChange}
      />
      <Checkbox
        name="literature"
        label="Literature"
        value="Literature"
        checked={formData.interests.literature?.includes("Literature")}
        onChange={handleChange}
      />
      <Input
        name="customInterests"
        label="Custom Interests"
        value={formData.interests.customInterests?.join(", ")}
        onChange={handleChange}
      />
    </div>
  );
}

