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

export default function Form2({ formData, setFormData }) {

  const handleChange = (event) =>{
      const { name, value} = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        defaultPreferences: {
          ...prevFormData.defaultPreferences,
          [name] :value
        },
      }));
  }

  return(
    <div className="flex flex-col gap-5">

      {/* preferredGroupSize */}
   {/* <Expectation /> */}

    <Menu
      dismiss={{
        itemPress: false,
      }}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button>PUT QUESTION HERE</Button>
      </MenuHandler>
      <MenuList>
      <Radio
            name="preferredGroupSize"
            label="Small"
            value="Small"
            checked={formData.defaultPreferences.preferredGroupSize === "Small"}
            onChange={handleChange}
          />
      <Radio
            name="preferredGroupSize"
            label="Medium"
            value="Medium"
            checked={formData.defaultPreferences.preferredGroupSize === "Medium"}
            onChange={handleChange}
          />
      <Radio
            name="preferredGroupSize"
            label="Large"
            value="Large"
            checked={formData.defaultPreferences.preferredGroupSize === "Large"}
            onChange={handleChange}
          />
      </MenuList>
    </Menu>

     {/* frequencyOfSocialising */}

      <Menu
      dismiss={{
        itemPress: false,
      }}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button>PUT QUESTION HERE: 2</Button>
      </MenuHandler>
      <MenuList>
      <Radio
            name="frequencyOfSocialising"
            label="Only holidays"
            value="Only holidays"
            checked={formData.defaultPreferences.frequencyOfSocialising === "Only holidays"}
            onChange={handleChange}
          />
      <Radio
            name="frequencyOfSocialising"
            label="few times a month"
            value="few times a month"
            checked={formData.defaultPreferences.frequencyOfSocialising === "few times a month"}
            onChange={handleChange}
          />
      <Radio
            name="frequencyOfSocialising"
            label="few times a week"
            value="few times a week"
            checked={formData.defaultPreferences.frequencyOfSocialising === "few times a week"}
            onChange={handleChange}
          />
      <Radio
            name="frequencyOfSocialising"
            label="Always Available"
            value="Always Available"
            checked={formData.defaultPreferences.frequencyOfSocialising === "Always Available"}
            onChange={handleChange}
          />
      </MenuList>
    </Menu>
    
      {/* personalityType */}

      <Menu
      dismiss={{
        itemPress: false,
      }}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button>PUT QUESTION HERE : 3</Button>
      </MenuHandler>
      <MenuList>
      <Radio
            name="personalityType"
            label="Introverted"
            value="Introverted"
            checked={formData.defaultPreferences.personalityType === "Introverted"}
            onChange={handleChange}
            // Introverted, Ambivert, Extroverted
          />
      <Radio
            name="personalityType"
            label="Ambivert"
            value="Ambivert"
            checked={formData.defaultPreferences.personalityType === "Ambivert"}
            onChange={handleChange}
          />
      <Radio
            name="personalityType"
            label="Extroverted"
            value="Extroverted"
            checked={formData.defaultPreferences.personalityType === "Extroverted"}
            onChange={handleChange}
          />
      </MenuList>
    
      </Menu>

      {/* eventGenderPreference */}

      <Menu
      dismiss={{
        itemPress: false,
      }}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button>PUT QUESTION HERE : 4</Button>
      </MenuHandler>
      <MenuList>
      <Radio
            name="eventGenderPreference"
            label="Males Only"
            value="Males Only"
            checked={formData.defaultPreferences.eventGenderPreference === "Males Only"}
            onChange={handleChange}
          />
      <Radio
            name="eventGenderPreference"
            label="Females Only"
            value="Females Only"
            checked={formData.defaultPreferences.eventGenderPreference === "Females Only"}
            onChange={handleChange}
          />
      <Radio
            name="eventGenderPreference"
            label="Mixed Gender"
            value="Mixed Gender"
            checked={formData.defaultPreferences.eventGenderPreference === "Mixed Gender"}
            onChange={handleChange}
          />
      </MenuList>
    
      </Menu>

    </div>
  )
}

