import logo from "../assets/logo.png";
import moment from 'moment';

const Header = () => {

    return (
        <div>
            <div className="text-center">
            <img src={logo} alt="" className="mx-auto"/>
            <h2 className="text-3xl border"> Journalism Without Fear or Favour</h2>
            <p className="">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;