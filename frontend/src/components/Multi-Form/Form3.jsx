import React from "react";
import { Input } from "@material-tailwind/react";
import { Expectation } from "./Form3Expectation";
import AddHobbies from "./HobbiesAdd";

// export default function Form3({ formData, setFormData }) {
//   function handleChange(event) {
//     const { name, value, type, checked } = event.target;

//       setFormData((prevFormData) => {
//         if (type = 'checkbox') {
//           let newExpectations = checked
//           ? [...prevFormData.theLittleThings.expectation, name]
//           : prevFormData.theLittleThings.expectation.filter((item) => item !== name);
//         }
//         return {
//           ...prevFormData,
//           theLittleThings: {
//             ...prevFormData.theLittleThings,
//             expectations: newExpectations,
//           },
//         };
//       }else {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         theLittleThings: {
//           ...prevFormData.theLittleThings,
//           [name]: value,
//         },
//       }));
//     }
//   }
export default function Form3({ formData, setFormData }) {
  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      if (type === "checkbox") {
        const newExpectations = checked
          ? [...prevFormData.theLittleThings.expectation, name]
          : prevFormData.theLittleThings.expectation.filter((item) => item !== name);
        return {
          ...prevFormData,
          theLittleThings: {
            ...prevFormData.theLittleThings,
            expectation: newExpectations,
          },
        };
      } else {
        return {
          ...prevFormData,
          theLittleThings: {
            ...prevFormData.theLittleThings,
            [name]: value,
          },
        };
      }
    });
  }
  
  return (
    <div className="flex flex-col gap-6">
       {/* <Input
    //     variant="Static"
    //     label="What Are Your Top 3 Hobbies?"
    //     placeholder="What Are Your Top 3 Hobbies?"
    //     name="hobbies"
    //     value={formData.theLittleThings.hobbies || ""}
    //     onChange={handleChange}
      /> */}
      <Expectation handleChange={handleChange} formData={formData} />
      {/* <Input
        variant="Static"
        label="What Are Your Expectations?"
        placeholder="What Are Your Expectations?"
        name="expectation"
        value={formData.theLittleThings.expectation || ""}
        onChange={handleChange}
      /> */}
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
      <AddHobbies formData={formData} setFormData={setFormData}/>
    </div>
  );
}