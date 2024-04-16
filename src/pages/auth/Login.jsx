import { data } from "autoprefixer";
import Form from "./components/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";                                                                                                 
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://react30.onrender.com/api/user/login",
        data
      );
      if (response.status === 200) {
        navigate("/register");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};
export default Login;
