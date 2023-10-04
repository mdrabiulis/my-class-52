import { useLoaderData } from "react-router-dom";
import BrikingNews from "../../Header/BrikingNews";
import Header from "../../Header/Header";
import LeftNavbar from "../Main/LeftNavbar/LeftNavbar";
import Main from "../Main/Main";
import RightNavbar from "../Main/RightNavbar/RightNavbar";
import Navbar from "../Navbar/Navbar";

const Home = () => {

const news = useLoaderData()


  return (
    <div>
      <Header></Header>
      <BrikingNews></BrikingNews>
      <Navbar></Navbar>
      <div className=" grid lg:grid-cols-4 gap-3">
        <div className="border">
            <LeftNavbar></LeftNavbar>
        </div>
        <div className="border lg:col-span-2">
          {
            news.map(anews => <Main anews= {anews} key={anews._id}> </Main>)
          }
             

            
        </div>
        <div className="border">
            <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
