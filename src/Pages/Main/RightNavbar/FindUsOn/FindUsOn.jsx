import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import qzone1 from "../../../../assets/qZone1.png"
import qzone2 from "../../../../assets/qZone2.png"
import qzone3 from "../../../../assets/qZone3.png"


const FindUsOn = () => {
  return (
    <div>
      <div className="p-4  ">
        <h2 className="text-3xl">Find Us On</h2>
        <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
          <BsFacebook className="mr-3"></BsFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border-x">
          <BsTwitter className="mr-3"></BsTwitter>
          <span>Twitter</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
          <BsInstagram className="mr-3"></BsInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4  ">
        <h2 className="text-3xl">Q-Zone</h2>
        <div className="">
            <img src={qzone1} alt="" />
        </div>
        <div className="">
            <img src={qzone2} alt="" />
        </div>
        <div className="">
            <img src={qzone3} alt="" />
        </div>
        
      </div>

    </div>
  );
};

export default FindUsOn;
