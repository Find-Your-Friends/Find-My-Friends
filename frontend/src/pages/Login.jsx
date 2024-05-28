import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { Button, Input, Typography, Card, CardBody } from "@material-tailwind/react";
import placeholder1 from '../images/placeholder1.jpeg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));

    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Blue section hidden on small screens */}
      <div
        className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-primary p-8"
        style={{ backgroundImage: `url(${placeholder1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        <img
          className="object-cover object-center w-full rounded-lg shadow-xl h-96 shadow-blue-gray-900/50 mb-6"
          src={placeholder1}
          alt="Hangout"
        />
        <Typography variant="h4" color="white" className="text-center font-semibold">
          Combat Loneliness
        </Typography>
        <Typography variant="body1" color="white" className="text-center mt-2">
          Join hangouts and make genuine connections.
        </Typography>
        <Button color="secondary" variant="contained" className="mt-6">
          Learn more
        </Button>
      </div>

      {/* Form section with background image on small screens */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 bg-cover bg-center">
        <Card className="w-full max-w-md p-8 bg-white/70 backdrop-blur-md shadow-lg rounded-lg">
          <CardBody>
            <Typography variant="h4" color="textPrimary" className="mb-6 text-center font-semibold">
              Sign In
            </Typography>
            <form onSubmit={handleSubmit} aria-labelledby="login-heading">
              <div className="mb-4">
                <Input
                  type="text"
                  color="primary"
                  size="large"
                  autoComplete="username"
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  color="primary"
                  size="large"
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <a href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button type="submit" color="primary" size="large" variant="contained" fullWidth>
                Sign In
              </Button>
              <p className="mt-4 text-center">
                Don't Have An Account?{' '}
                <Link to="/sign-up" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
              {errorText && <p className="mt-4 text-center text-red-500">{errorText}</p>}
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
