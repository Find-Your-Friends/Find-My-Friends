import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { updateUserInfo } from "../adapters/user-adapter";
import { Input, Button } from "@material-tailwind/react";

export const AdditionalInfo = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        
        try {
            const { user, error } = await updateUserInfo({
                id: currentUser.id,
                location,
                gender,
                age,
            });

            if (error) {
                return setError(error.statusText);
            }

            setCurrentUser(user);
            navigate("/");
        } catch (err) {
            setError("An unexpected error occurred.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "location") setLocation(value);
        if (name === "gender") setGender(value);
        if (name === "age") setAge(value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-72">
                    <Input
                        label="Location"
                        name="location"
                        value={location}
                        onChange={handleChange}
                        icon={<i className="fas fa-heart" />}
                    />
                    <Input
                        label="Gender"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                        icon={<i className="fas fa-heart" />}
                    />
                    <Input
                        label="Age"
                        name="age"
                        value={age}
                        onChange={handleChange}
                        icon={<i className="fas fa-heart" />}
                    />
                    <Button type="submit" color="primary" size="lg" fullWidth>
                        Submit
                    </Button>
                </div>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};
