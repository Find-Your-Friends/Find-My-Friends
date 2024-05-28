import { Input, Radio } from "@material-tailwind/react";
import React, { useState, useContext } from "react";
// import { useNavigate, Navigate, Link } from "react-router-dom";
// import CurrentUserContext from "../contexts/current-user-context";
// import { updateUserInfo } from "../adapters/user-adapter";

export default function Form3({ formData, setFormData }){
    // const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
//     const [formData, setFormData] = useState({
//         male: "",
//         female: "",
//         email: ""
//     })

//     function handleChange(event){
//         const {name, value} = event.target
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name] : value
//         }))
//         console.log(name, value)
//     }
// import React from "react";
    return (
        <div className="flex flex-col gap-5">
        <Radio name="type" label="HTML" disabled />
        <Radio name="type" label="React" disabled defaultChecked />
        <Input label="Username3" />
        <Input label="Username3" />
        <Input label="Username3" />
        <Input label="Username3" />
        <Input label="Username3" />
        <Input label="Username3" />
      </div>
    )
}

// 1. Preferred Group Size: Small, medium, or large gatherings.
// 2. Types of Events: Casual meetups, professional networking, hobby-based gatherings, etc.
// 3. Frequency of Socialising: Rarely, occasionally, often, very often
// 4. Comfort Level: Introverted, ambivert, extroverted.
// 5. need to allow users to select event preference(open to males ,females, mix)
//     1. a gender cannot choose the same gender