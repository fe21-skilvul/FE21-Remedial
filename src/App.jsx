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
  );
}

export default App;
