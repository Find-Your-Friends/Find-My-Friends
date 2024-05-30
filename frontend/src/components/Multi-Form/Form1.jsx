import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Input, Radio } from "@material-tailwind/react";

export default function Form1({ formData, setFormData }) {
 
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((previousData) => ({
            ...previousData,
            basicInfo: {
                ...previousData.basicInfo,
                [name]:value
            }
        }))
    }

  return (
    <div className="flex flex-col gap-5">
      <Radio name="gender" label="Male" value="Male" checked={formData.basicInfo.gender === "Male"} onChange={handleChange} />
      <Radio name="gender" label="Female" value="Female" checked={formData.basicInfo.gender === "Female"} onChange={handleChange} />
      <Radio name="gender" label="Other" value="Other" checked={formData.basicInfo.gender === "Other"} onChange={handleChange} />
      <Input name="age" label="Age" value={formData.basicInfo.age} onChange={handleChange} />
      <Input name="location" label="Location" value={formData.basicInfo.location} onChange={handleChange} />
    </div>
  );
}

