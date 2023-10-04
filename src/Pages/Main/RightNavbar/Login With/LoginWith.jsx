import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuthContext from "../../../../Houcks/useAuthContext";


const LoginWith = () => {

const {googleLogin} = useAuthContext();




const googleLogIn =()=>{
  googleLogin()
  .then(res =>{
    console.log(res.user)
  })
  .catch(error =>{
    console.log(error);
  })
}




  return (
    <div className="p-4 space-y-3 mb-6">
      <h2 className="text-3xl">Login With</h2>
      <button onClick={googleLogIn} className="btn btn-outline w-full">
        <FcGoogle></FcGoogle>
        Login with Google
      </button>
      <button className="btn btn-outline w-full">
        <BsGithub></BsGithub>
        Login with Github
      </button>
    </div>
  );
};

export default LoginWith;
