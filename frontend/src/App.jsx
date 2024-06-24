import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import { AdditionalInfo } from './components/Additional-Info';
import PersonalInfo from './components/PersonalInfo';
import UserPost from './components/Post';
// import ProtectedRoute from './components/ProtectedRoute';
import CurrentUserContextProvider from './contexts/CurrentUserContextProvider';
// import AboutPage from './pages/LearnMore';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
      {/* <SiteHeadingAndNav /> */}
      {/* <CurrentUserContextProvider>
      <main>
        <Routes>
        <Route path="/additional-info" element={<AdditionalInfo />} />
          <Route path='/' element={<ProtectedRoute element={Home} />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/additional-info" element={<ProtectedRoute element={AdditionalInfo} />} />
          <Route path="/personal-info" element={<ProtectedRoute element={PersonalInfo} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/users' element={<ProtectedRoute element={UsersPage} />} />
          <Route path='/users/:id' element={<ProtectedRoute element={UserPage} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      </CurrentUserContextProvider> */}

      {/* <SiteHeadingAndNav /> */}
       <main>
         <Routes>
           <Route path='/home'  element={<HomePage /> } />
           <Route path="/personal-info" element={<PersonalInfo />} />
           <Route path="/post" element={<UserPost />} />
           <Route path='/login' element={<LoginPage />} />
           <Route path='/sign-up' element={<SignUpPage />} />
           <Route path='/users' element={<UsersPage />} />
           <Route path='/users/:id' element={<UserPage />} />
           <Route path='*' element={<NotFoundPage />} />
         </Routes>
       </main>
  </>;
}
