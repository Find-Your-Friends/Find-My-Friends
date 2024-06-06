import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
// import placeholder1 from '../images/placeholder1.jpeg'
import placeholder2 from '../images/placeholder2.jpeg'
// import { SimpleFooter } from "../components/SignupFooter";
import {
  Button,
  Input,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    full_name: "",
    passwordConfirm: "",
  });

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const { username, password, email, full_name, passwordConfirm } = formData;

    if (!username || !password || !email || !passwordConfirm || !full_name) {
      return setErrorText("Missing Input fields");
    }
    if (password !== passwordConfirm) {
      return setErrorText("Passwords do not match");
    }

    const userData = {
      username,
      password,
      email,
      full_name,
      profile_pic: "../images/placeholder1.jpeg",
    };

    const [user, error] = await createUser(userData);
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate("/additional-info");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(name, value);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 ">
      {/* bg-cover bg-center */}
        <Card className="w-full max-w-md p-4 shadow-lg rounded-lg">
          <CardBody>
            <Typography
              variant="h4"
              color="textPrimary"
              className="mb-6 text-center font-semibold"
            >
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit} aria-labelledby="create-heading">
              <div className="mb-4">
                <Input
                  type="email"
                  color="primary"
                  size="large"
                  autoComplete="off"
                  id="Email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={formData.email}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="large"
                  autoComplete="off"
                  id="Full-Name"
                  name="full_name"
                  label="Full-Name"
                  onChange={handleChange}
                  value={formData.full_name}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="large"
                  autoComplete="off"
                  id="Username"
                  name="username"
                  label="Username"
                  onChange={handleChange}
                  value={formData.username}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  color="primary"
                  size="large"
                  autoComplete="off"
                  id="Password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  value={formData.password}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  color="primary"
                  size="large"
                  autoComplete="off"
                  id="Confirm your password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  onChange={handleChange}
                  value={formData.passwordConfirm}
                  fullWidth
                />
              </div>
              <Button type="submit" color="primary" size="large" variant="contained" fullWidth>
                Sign Up Now!
              </Button>
              {errorText && (
                <p className="mt-4 text-center text-red-500">{errorText}</p>
              )}
            </form>
            <p className="mt-4 text-center">
              Already have an account with us?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in!
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
      <div 
        className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-primary p-8"
        style={{ 
          backgroundImage: `url(https://shorturl.at/2MBDs)`,
          backgroundRepeat: "no-repeat", 
          backgroundSize: 'cover'
        }}
      >
        <Typography variant="h4" color="white" className="text-center font-semibold">
          Combat Loneliness
        </Typography>
        <Typography variant="body1" color="white" className="text-center mt-2">
          Join hangouts and make genuine connections.
        </Typography>
        <Button color="secondary" variant="contained" className="mt-6">Learn more</Button>
      </div>
    </div>
  );
}

// import { useContext, useState } from "react";
// import { useNavigate, Navigate, Link } from "react-router-dom";
// import CurrentUserContext from "../contexts/current-user-context";
// import { createUser } from "../adapters/user-adapter";
// // import placeholder1 from '../images/placeholder1.jpeg'
// import placeholder2 from '../images/placeholder2.jpeg';
// import { SimpleFooter } from "../components/SignupFooter";
// import { Button, Input, Typography, Card, CardBody } from "@material-tailwind/react";

// export default function SignUpPage() {
//   const navigate = useNavigate();
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//   const [errorText, setErrorText] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     full_name: "",
//     passwordConfirm: "",
//   });

//   if (currentUser) return <Navigate to="/" />;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorText("");

//     const { username, password, email, full_name, passwordConfirm } = formData;

//     if (!username || !password || !email || !passwordConfirm || !full_name) {
//       return setErrorText("Missing input fields");
//     }

//     if (password !== passwordConfirm) {
//       return setErrorText("Passwords do not match");
//     }

//     const userData = {
//       username,
//       password,
//       email,
//       full_name,
//       profile_pic: "../images/placeholder1.jpeg",
//     };
//     setCurrentUser(user);
//     if (error) return setErrorText(error.message);

//     setCurrentUser(user);
//     navigate("/additional-info");
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="flex min-h-screen bg-background">
//       <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4">
//         <Card className="w-full max-w-md p-4 shadow-lg rounded-lg">
//           <CardBody>
//             <Typography variant="h4" color="textPrimary" className="mb-6 text-center font-semibold">
//               Sign Up
//             </Typography>
//             <form onSubmit={handleSubmit} aria-labelledby="create-heading">
//               <div className="mb-4">
//                 <Input
//                   type="email"
//                   color="primary"
//                   size="large"
//                   autoComplete="off"
//                   id="Email"
//                   name="email"
//                   label="Email"
//                   onChange={handleChange}
//                   value={formData.email}
//                   fullWidth
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   type="text"
//                   color="primary"
//                   size="large"
//                   autoComplete="off"
//                   id="Full-Name"
//                   name="full_name"
//                   label="Full Name"
//                   onChange={handleChange}
//                   value={formData.full_name}
//                   fullWidth
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   type="text"
//                   color="primary"
//                   size="large"
//                   autoComplete="off"
//                   id="Username"
//                   name="username"
//                   label="Username"
//                   onChange={handleChange}
//                   value={formData.username}
//                   fullWidth
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   type="password"
//                   color="primary"
//                   size="large"
//                   autoComplete="off"
//                   id="Password"
//                   name="password"
//                   label="Password"
//                   onChange={handleChange}
//                   value={formData.password}
//                   fullWidth
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   type="password"
//                   color="primary"
//                   size="large"
//                   autoComplete="off"
//                   id="ConfirmPassword"
//                   name="passwordConfirm"
//                   label="Confirm your password"
//                   onChange={handleChange}
//                   value={formData.passwordConfirm}
//                   fullWidth
//                 />
//               </div>
//               <Button type="submit" color="primary" size="large" variant="contained" fullWidth>
//                 Sign Up Now!
//               </Button>
//               {errorText && (
//                 <p className="mt-4 text-center text-red-500">{errorText}</p>
//               )}
//             </form>
//             <p className="mt-4 text-center">
//               Already have an account with us?{" "}
//               <Link to="/login" className="text-primary hover:underline">
//                 Log in!
//               </Link>
//             </p>
//           </CardBody>
//         </Card>
//       </div>
//       <div
//         className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-primary p-8"
//         style={{
//           backgroundImage: `url(https://shorturl.at/2MBDs)`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <Typography variant="h4" color="white" className="text-center font-semibold">
//           Combat Loneliness
//         </Typography>
//         <Typography variant="body1" color="white" className="text-center mt-2">
//           Join hangouts and make genuine connections.
//         </Typography>
//         <Button color="secondary" variant="contained" className="mt-6">
//           Learn more
//         </Button>
//       </div>
//     </div>
//   );
// }


