import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrikingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Secondary</button>
      <Marquee pauseOnHover ={true} speed={100} >
         <Link>Journalism Without Fear or Favour................</Link>
         <Link>Journalism Without Fear or Favour................</Link>
         <Link>Journalism Without Fear or Favour................</Link>
         <Link>Journalism Without Fear or Favour................</Link>
      </Marquee>
      <p>
        
      </p>
    </div>
  );
};

export default BrikingNews;
