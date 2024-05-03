import { Outlet } from "react-router-dom";
import Footer from "../Page/Home/Shared/Footer";
import NavBar from "../Page/Home/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
             <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;