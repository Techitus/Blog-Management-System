import { data } from "autoprefixer";
import Form from "./components/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";                                                                                                 
import { baseUrl } from "../../config";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/login`,
        data
      );
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate("/");
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
