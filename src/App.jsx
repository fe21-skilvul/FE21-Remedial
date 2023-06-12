// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  SingleCourse,
  Cart,
  Courses,
  AboutPage,
  Blog,
  DetailBlog,
} from "./pages";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
