import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Input, Button, Typography} from "@material-tailwind/react";
// import { useNavigate, Navigate, Link } from "react-router-dom";


import React, { useState, useEffect } from "react";

const API_KEY = "AIzaSyC0FuBm4MDFDTvUYZy8d7tCi2t2xTWKPYU";

export const UserLocation = () => {
    const [userLocation, setUserLocation] = useState();
    const [address, setAddress] = useState("");
    const [manualLocation, setManualLocation] = useState("");

    const getAddressFromCoords = async (lat, lng) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
            const data = await response.json();
            console.log(data);
            if (data.results && data.results[0]) {
                setAddress(data.results[0].formatted_address);
            } else {
                setAddress("Cannot find your address");
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    useEffect(() => {
        const getGeoLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setUserLocation({ latitude, longitude });
                        getAddressFromCoords(latitude, longitude);
                    },
                    (error) => {
                        console.error(error);
                    }
                );
            }
        };
        getGeoLocation();
    }, []);

    const handleInputChange = (event) => {
        setManualLocation(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${manualLocation}&key=${API_KEY}`);
            const data = await response.json();
            if (data.results && data.results[0]) {
                const location = data.results[0].geometry.location;
                setUserLocation({ latitude: location.lat, longitude: location.lng });
                setAddress(data.results[0].formatted_address);
            } else {
                setAddress("Cannot find this address");
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    return (
        <div>
            <h1>Geolocation App</h1>
            {/* {userLocation && (
                <div>
                    <Typography variant="h2">
                    User Location
                    </Typography>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                    <p>Address: {address}</p>
                </div>
            )} */}
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Enter your location"
                    value={manualLocation}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

// export const userLocation = () => {
//     const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
//     const [location, setLocation] = useState()

//     useEffect(() => {
//         console.log(navigator)
//         const getGeoLocation = () => {
//             console.log(navigator.geolocation)
//             if (navigator.geolocation){}
//         }
//     }, []) 

//     handleChange =(event) =>{
//        setLocation(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setCurrentUser({ ...currentUser, location }); 
//         console.log("Submitted location:", location);
//     };

//     return (
//         <div>
//          <form onSubmit={handleSubmit}>
//             <Input 
//                 type="text" 
//                 placeholder="Enter your location" 
//                 value={location} 
//                 onChange={(e) => setLocation(e.target.value)}
//             />
//             <Button type="submit">Submit</Button>
//         </form>

//         </div>
//     )
// };