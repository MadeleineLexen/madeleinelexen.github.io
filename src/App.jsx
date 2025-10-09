import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <div id="root">
      <div className="content">
      <Menu /> 
      <ScrollToTop />
      <Outlet></Outlet>
      </div>
      <Footer />
    </div>  );
}

export default App;

