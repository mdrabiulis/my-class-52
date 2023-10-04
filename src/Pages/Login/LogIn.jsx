import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAuthContext from "../../Houcks/useAuthContext";

const LogIn = () => {

  const {logInUser} = useAuthContext();
  const navigate = useNavigate()
  const location   = useLocation();
console.log("my name", location)




const hendlelogIn = e => {
    e.preventDefault();

    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password = from.get('password');
 


    logInUser(email,password)
    .then(res => {
      console.log(res.user);
      navigate(location?.state? location.state : "/")
    })
    .catch(error =>{
      console.log(error);
    })

}




  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hendlelogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center"> Do not Have An Account ? <Link to="/register" >Register</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
