import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { updateUserInfo } from "../adapters/user-adapter";
import { Input } from "@material-tailwind/react";

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

        
      const [user, error] = await updateUserInfo({
        id: currentUser.id,
        location,
        gender,
        age,
      });
      setCurrentUser(user);
    
      if (error) return setError(error.statusText);
      navigate("/");
    }
    return (
        <div>
            <form action="">
                <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
                <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
                <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
            </form>

        </div>
    )
}
