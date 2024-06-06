import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
  Radio,
} from "@material-tailwind/react";

export default function Form1({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      basicInfo: {
        ...previousData.basicInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col ">
        <h1>Please Select Your Gender?</h1>
        <Radio
          name="gender"
          label="Male"
          value="Male"
          checked={formData.basicInfo.gender === "Male"}
          onChange={handleChange}
        />
        <Radio
          name="gender"
          label="Female"
          value="Female"
          checked={formData.basicInfo.gender === "Female"}
          onChange={handleChange}
        />
        <Radio
          name="gender"
          label="Other"
          value="Other"
          checked={formData.basicInfo.gender === "Other"}
          onChange={handleChange}
        />
      </div>
      <Input
        name="age"
        label="Age"
        value={formData.basicInfo.age}
        onChange={handleChange}
      />
      <Input
        name="location"
        label="Location"
        value={formData.basicInfo.location}
        onChange={handleChange}
      />
    </div>
  );
}

/*
	PART1
Name, 
Age,
gender, 
Personal signature || username
Location

PART 2
Preferred_group_size
Personality_type(Introvert, ambivert, extrovert)
Gender preference - male friends, female friends, mixed(mixed will be hard to implement)
Frequency of socialising (should include major holidays as special events )
 Only holidays ,few times a month, few times a week, always available

	PART 3
Expectation- ,what are you hoping to get out of the app(should be the same more)
Hobbies - may have to make it a discovery thing. We encourage users to find new and share their existing hobbies with each other allow them to add it to their profile as a collection they choose their top three hobbies and as they meet people they can collect hobbies 
A secret that only the devs know but can be revealed upon user request
Icebreaker Questions: Pre-set questions to help initiate conversations.(users can generate one question which is then added to an array of questions

*/