// import React from "react";
// import {
//   Menu,
//   MenuHandler,
//   Button,
//   MenuList,
//   MenuItem,
//   Checkbox,
//   Input,
//   Radio,
// } from "@material-tailwind/react";

// export default function Form3({ formData, setFormData }) {
//   function handleChange(event) {
//     const { name, value } = event.target;
//     console.log(`Changing: ${name}, New Value: ${value}`); 
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       theLittleThings: {
//         ...prevFormData.theLittleThings,
//         [name]: value,
//       },
//     }));
//   }

//   return (
//     <div className="flex flex-col gap-6">
//       <Input
//         variant="Static"
//         label="What Are Your Top 3 Hobbies?"
//         placeholder="What Are Your Top 3 Hobbies?"
//         name="hobbies"
//         value={formData.theLittleThings.hobbies || ''}
//         onChange={handleChange}
//       />
//       <Input
//         variant="Static"
//         label="What Are Your Expectations?"
//         placeholder="What Are Your Expectations?"
//         name="expectation"
//         value={formData.theLittleThings.expectation || ''}
//         onChange={handleChange}
//       />
//       <Input
//         variant="Static"
//         label="Tell Us A Secret That We'll Keep..."
//         placeholder="Tell Us A Secret That We'll Keep..."
//         name="aSecret"
//         value={formData.theLittleThings.aSecret || ''}
//         onChange={handleChange}
//       />
//       <Input
//         variant="Static"
//         label="Tell Us Your Favourite Icebreaker"
//         placeholder="Tell Us Your Favourite Icebreaker"
//         name="icebreaker"
//         value={formData.theLittleThings.icebreaker || ''}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

import React from "react";
import { Input } from "@material-tailwind/react";

export default function Form3({ formData, setFormData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      theLittleThings: {
        ...prevFormData.theLittleThings,
        [name]: value,
      },
    }));
  }

  return (
    <div className="flex flex-col gap-6">
      <Input
        variant="Static"
        label="What Are Your Top 3 Hobbies?"
        placeholder="What Are Your Top 3 Hobbies?"
        name="hobbies"
        value={formData.theLittleThings.hobbies || ""}
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="What Are Your Expectations?"
        placeholder="What Are Your Expectations?"
        name="expectation"
        value={formData.theLittleThings.expectation || ""}
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="Tell Us A Secret That We'll Keep..."
        placeholder="Tell Us A Secret That We'll Keep..."
        name="aSecret"
        value={formData.theLittleThings.aSecret || ""}
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="Tell Us Your Favourite Icebreaker"
        placeholder="Tell Us Your Favourite Icebreaker"
        name="iceBreaker"  // Ensure this matches the key "iceBreaker"
        value={formData.theLittleThings.iceBreaker || ""}
        onChange={handleChange}
      />
    </div>
  );
}