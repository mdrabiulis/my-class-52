import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../Houcks/useAuthContext";


const PrivedRouter = ({children}) => {
    const {user, loading} = useAuthContext();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-infinity loading-lg mx-auto"></span>;
    }

    if (user) {
        return children;
        
    }

    return <Navigate state={location.pathname} to= "/register"></Navigate>
};
// register

export default PrivedRouter;