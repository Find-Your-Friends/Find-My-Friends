import { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

export default function HomePage() {

  const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

  if (!currentUser)  return <Navigate to="/landing" />;
  return <>
  </>;
}
