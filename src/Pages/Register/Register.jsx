import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAuthContext from "../../Houcks/useAuthContext";


const Register = () => {

  const location = useLocation()
  const navigate = useNavigate()


  const {createUser}= useAuthContext();
  // console.log(createUser);
  
  const hendleRegister = e => {
            e.preventDefault();
            const from = new FormData(e.currentTarget);
            const name = from.get('name');
            const email = from.get('email');
            const photo = from.get('photo');
            const password = from.get('password');

            // console.log(name, email, photo, password);


            createUser(email, password)
            .then(res =>{
              console.log(res.user)
              navigate(location?.state? location.state : "/")
            })
            .catch(error => {
              console.error(error);
            })

        }
        
        
        
        
          return (
            <>
              <Navbar></Navbar>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                  <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendleRegister} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="name"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
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
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="photo"
                          name="photo"
                          placeholder="Photo URL"
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
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                      </div>
                    </form>
                    <p className="text-center"> All ready have An Account ? <Link to="/login" >Login</Link> </p>
                  </div>
                </div>
              </div>
            </>
          );
        };
        

export default Register;