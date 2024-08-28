import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import Workfolo from "./Components/Workfolo";
import Price from "./Components/Price";
import Test from "./Components/Test";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="maz-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workfolo></Workfolo>
        <Price></Price>
        <Test></Test>
        <Footer></Footer>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
