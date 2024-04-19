import {  useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { baseUrl } from "../../config";
const AddBlog = () => {
  const navigate = useNavigate()
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/blog`,
        data,{
headers : {
  "Content-Type" : "multipart/form-data",
 "Authorization ": localStorage.getItem('token')
}
        }
      );
      if (response.status === 201) {
   navigate("/");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
      
  
  return (
   
    <>
      <Layout>
<Form type="Add Post" onSubmit = {handleCreateBlog}/>
      </Layout>
    </>
  );
};

export default AddBlog;
