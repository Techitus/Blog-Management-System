import Form from "./components/Form/Form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";                                                                                                 
import { baseUrl } from "../../config";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/login`,
        data
      );
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate("/");
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect Password!",
        });
      }
    } catch (error) {
      // alert(error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect Password!",
      });
    }
  };
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};
export default Login;
