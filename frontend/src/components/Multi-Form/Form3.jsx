import React from "react";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
  Input,
  Radio,
} from "@material-tailwind/react";

const theLittleThings = {
  expectation: "",
  hobbies: [],
  aSecret: "",
  iceBreaker: "",
};

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
    // <div className="flex w-72 flex-col gap-6">
    <div className="flex flex-col gap-6">
      <Input
        variant="Static"
        label="What Are You Hoping To Get From Using This App?"
        placeholder="What Are You Hoping To Get From Using This App?"
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="What Are Your expectations?"
        placeholder="What Are Your expectations?"
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="Tell Us A secret that we'll keep. Once you trust someone Enough You can tell them?"
        placeholder="Tell Us A secret that we'll keep. Once you trust someone Enough You can tell them?"
        onChange={handleChange}
      />
      <Input
        variant="Static"
        label="Tell Us your Favourite Icebreaker?"
        placeholder="Tell Us your Favourite Icebreaker?"
        onChange={handleChange}
        // className=""
      />       
    </div>
  );
}

// 1. Preferred Group Size: Small, medium, or large gatherings.
// 2. Types of Events: Casual meetups, professional networking, hobby-based gatherings, etc.
// 3. Frequency of Socialising: Rarely, occasionally, often, very often
// 4. Comfort Level: Introverted, ambivert, extroverted.
// 5. need to allow users to select event preference(open to males ,females, mix)
//     1. a gender cannot choose the same gender
