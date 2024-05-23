import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { updateUserInfo } from "../adapters/user-adapter";
import { Input, Button} from "@material-tailwind/react";

export const AdditionalInfo = () => {
    const { currentUser, setCurrentUser, accountType } = useContext(CurrentUserContext);
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const [aboutMe, setAboutMe] = useState("");
    // const [status, setStatus] = useState("");

const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    
      const {user, error} = await updateUserInfo({
        id: currentUser.id,
        location,
        gender,
        age,
      });
      setCurrentUser(user);
    
      if (error) return setError(error.statusText);
      navigate("/");
    }

    const  handleChange = (event) => {
		const { name , value } = event.target
        if (name === "location")setLocation(value)
        if (name === "gender")setGender(value)
        if (name === "age")setAge(value)
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-72">
                    <Input label="location" name="location" value = {location} onChange={handleChange} icon={<i className="fas fa-heart" />} />
                    <Input label="gender" name="gender" value = {gender} onChange={handleChange} icon={<i className="fas fa-heart" />} />
                    <Input label="name" name="age" value = {age} onChange={handleChange} icon={<i className="fas fa-heart" />} />
                    <Button type="submit" color="primary" size="lg" fullWidth>Submit</Button>
                    {/* <Input label="Input With Icon" value = {} icon={<i className="fas fa-heart" />} /> */}
                </div>
            </form>

        </div>
    )
}
