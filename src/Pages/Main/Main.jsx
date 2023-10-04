import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Main = ({ anews }) => {

  const {_id,details,title, image_url  }= anews;
  console.log(_id);

  return (
    <>
      
<div className="">
<div className="card bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 200 
        ? <p> { details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600">Read Mode....</Link> </p> 
        : 
        <p>{ details}</p>

    }

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    </>
    
  );
};

export default Main;
Main.propTypes = {
    anews:PropTypes.object,
}