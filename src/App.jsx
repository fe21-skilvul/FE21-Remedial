// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses, AboutPage, Blog, DetailBlog} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
