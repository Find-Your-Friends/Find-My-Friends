
import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import { Button, Input, Typography, Card, CardBody } from "@material-tailwind/react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password || !email || !passwordConfirm || !fullName) return setErrorText('Missing Input fields');

    const [user, error] = await createUser({ 
      username, 
      password, 
      email, 
      fullName, 
      passwordConfirm });
      
      setCurrentUser(user);
      if (error) return setErrorText(error.message);

    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
    if (name === "full-name") setFullName(value);
    if (name === "password-confirm") setPasswordConfirm(value);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <Card className="w-full max-w-md p-8">
          <CardBody>
            <Typography variant="h4" color="textPrimary" className="mb-2 text-center">
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
                  value={email}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Full-Name"
                  name="full-name"
                  label="Full-Name"
                  onChange={handleChange}
                  value={fullName}
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
                  value={username}
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
                  value={password}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  color="primary"
                  size="lg"
                  autoComplete="off"
                  id="Confirm your password"
                  name="password-confirm"
                  label="Confirm your password"
                  onChange={handleChange}
                  value={passwordConfirm}
                />
              </div>
              <Button type="submit" color="primary" size="lg" fullWidth>
                Sign Up Now!
              </Button>
              { !!errorText && <p className="mt-4 text-center text-red-500">{errorText}</p> }
            </form>
            <p className="mt-4 text-center">
              Already have an account with us? <Link to="/login" className="text-primary hover:underline">Log in!</Link>
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 bg-primary p-8">
        <img src="/path/to/your/image.png" alt="Hangout" className="mb-6"/>
        <Typography variant="h4" color="white" className="text-center">
          Combat Loneliness
        </Typography>
        <Typography variant="body1" color="white" className="text-center mt-2">
          Join hangouts and make genuine connections.
        </Typography>
        <Button color="secondary" className="mt-6"><Link to="/learnmore" >Learn More</Link></Button>
      </div>
    </div>
  );
}
