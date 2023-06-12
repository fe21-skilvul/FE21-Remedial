
import Landing from "./components/Landing";
import Ratings from "./components/Ratings";
import Class from "./components/Class";
import Remidial from "./components/Remidial";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Program from "./components/Program";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Cover />
      <Landing />
      <Class />
      <Ratings />
      <Remidial />
      <Program />
      <Footer />
      <a href="#" className="fixed right-10 bottom-10 bg-white  rounded-full">
        <img src="src\assets\top.png" className="w-8" alt="icon arrow top" />
      </a>
    </>
=======
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses, AboutPage, Blog, DetailBlog} from "./pages";
import Navbar from "./components/Navbar";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
=======
import Footer from "./components/Footer";

// import "./index.css";

function App() {
  return (

    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute>
                <SingleCourse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/category/:category"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>

 


  );
}

export default App;
