import { useState } from "react";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Input, Button } from "@material-tailwind/react";
// import { useNavigate, Navigate, Link } from "react-router-dom";

export const userLocation = () => {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const [location, setLocation] = useState()

    handleChange =(event) =>{
       setLocation(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentUser({ ...currentUser, location }); 
        console.log("Submitted location:", location);
    };

    return (
        <div>
         <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Enter your location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </form>

        </div>
    )
};