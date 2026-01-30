import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Footer2 from "./components/Footer2";
import { Navbar } from "react-bootstrap";




function App() {
  return (
    <div id="root">
      <div className="content">
      <Menu /> 
      <ScrollToTop />
      <Outlet></Outlet>
      </div>
      <Footer2 />
    </div>  );
}

export default App;

