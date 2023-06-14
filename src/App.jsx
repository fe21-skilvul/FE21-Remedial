import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  SingleCourse,
  Cart,
  List,
  Courses,
  AboutPage,
  Blog,
  DetailBlog,
} from "./pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ErrorPages from "./pages/ErrorPages";

// import "./index.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="*" element={<ErrorPages />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/courselist" element={<List />}></Route>
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
