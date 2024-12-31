import { useNavigate } from "react-router-dom";
import { loginUser, registerNewUser } from "./handler";

const LoginPage = () => {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
    // add new user in local and login him
    registerNewUser(values.name);
    loginUser(values.name);
    navigate("/chat")
  };
  return (
    <div className="">
      <h1>Login Page</h1>
      {/* Add login form here */}
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
