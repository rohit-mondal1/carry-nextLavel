import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";



const Main = () => {
 
  return (
    <div className="relative">
      
      <div className="sticky top-0 z-50"><Header ></Header></div>
     
      <div  style={{minHeight:'100vh'}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;