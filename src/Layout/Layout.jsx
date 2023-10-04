import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";


const Layout = () => {
    return (
        <div className="max-w-[1300px] mx-auto font-poppins">
           
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;