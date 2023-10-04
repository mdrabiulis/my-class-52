import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [caterogys, setCaterogys] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then(res => res.json())
      .then(data => setCaterogys(data))
  }, []);

  

  return (
    <div>
        
      <h2 className="text-4xl">All Caterogy</h2>
      {caterogys.map((caterogy) => (
        <Link to ={`/caterogy/${caterogy.id}`} className="block ml-6 my-8 text-2xl font-semibold" key={caterogy.id}>
          {caterogy.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftNavbar;
