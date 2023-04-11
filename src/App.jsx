import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
