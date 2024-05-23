import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
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
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 bg-cover bg-center">
        <Card className="w-full max-w-md p-8">
          <CardBody>
            <Typography
              variant="h4"
              color="textPrimary"
              className="mb-2 text-center"
            >
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit} aria-labelledby="create-heading">
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Full-Name"
                  name="full_name"
                  label="Full-Name"
                  onChange={handleChange}
                  value={formData.full_name}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Username"
                  name="username"
                  label="Username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Confirm your password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  onChange={handleChange}
                  value={formData.passwordConfirm}
                />
              </div>
              <Button type="submit" color="primary" size="lg" fullWidth>
                Sign Up Now!
              </Button>
              {!!errorText && (
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
    </div>
  );
}
