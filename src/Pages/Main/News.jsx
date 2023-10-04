import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightNavbar from "./RightNavbar/RightNavbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
          <Header></Header>
          
          <Navbar></Navbar>
          <div className=" grid lg:grid-cols-4 gap-3">
            
            <div className="border lg:col-span-3">
              <p className="">{id}</p>
            </div>
            <div className="border">
                <RightNavbar></RightNavbar>
            </div>
          </div>
        </div>
      );
    };


export default News;