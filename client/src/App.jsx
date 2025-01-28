import { BrowserRouter, Route, Routes, Link, Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Properties from "./Pages/Properties";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet"; // Importing react-helmet for dynamic <head> management

const ProtectedRoute = ({ element }) => {
  const { currentUser } = useSelector((state) => state.user); // Access currentUser from Redux state
  return currentUser ? element : <Navigate to="/signin" />; // Redirect to signin if not authenticated
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without header/footer */}
        <Route
          path="/signup"
          element={
            <>
              <Helmet>
                <title>Sign Up </title>
                <meta name="description" content="Create an account with Zaawadi Homes and start your property search today!" />
              </Helmet>
              <SignUp />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Helmet>
                <title>Sign In </title>
                <meta name="description" content="Sign in to Zaawadi Homes to access your account and saved listings." />
              </Helmet>
              <SignIn />
            </>
          }
        />

        {/* All other routes with header/footer */}
        <Route
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Outlet /> 
              </main>
              <Footer />
            </div>
          }
        >
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Zaawadi Homes</title>
                  <meta name="description" content="Welcome to Zaawadi Homes, your go-to platform for finding the best properties." />
                </Helmet>
                <ProtectedRoute element={<Home />} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us </title>
                  <meta name="description" content="Learn more about Zaawadi Homes and our mission." />
                </Helmet>
                <ProtectedRoute element={<About />} />
              </>
            }
          />
          <Route
            path="/properties"
            element={
              <>
                <Helmet>
                  <title>Our Properties</title>
                  <meta name="description" content="Explore a wide range of properties available at Zaawadi Homes." />
                </Helmet>
                <ProtectedRoute element={<Properties />} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us </title>
                  <meta name="description" content="Get in touch with Zaawadi Homes for any inquiries." />
                </Helmet>
                <ProtectedRoute element={<Contact />} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Helmet>
                  <title>Your Profile</title>
                  <meta name="description" content="View and manage your profile on Zaawadi Homes." />
                </Helmet>
                <ProtectedRoute element={<Profile />} />
              </>
            }
          />
          <Route path="*" element={<ProtectedRoute element={<NotFound />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
};

export default App; // This is the main component that will be exported and used in the main.jsx file
