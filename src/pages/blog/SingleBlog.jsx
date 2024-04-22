/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import axios from "axios"
import { baseUrl } from "../../config"
import { useEffect, useState } from "react"

const SingleBlog = () => {
    const {id} = useParams()
        const [blog, setBlog] = useState({})
const navigate = useNavigate()

    const deleteBlog =async ()=>{
        try{
      const response = await   axios.delete(`${baseUrl}/blog/${id}`,{
        headers : {
          "Authorization ": localStorage.getItem('token')
        }
      })
      if(response.status === 200){
        navigate('/')
      } else{
        alert('Something went wrong')
      }
    }catch(error) {
        alert(error?.response?.data?.message)
    }

      }
    
  const fetchBlog = async ()=>{
  const response =  await axios.get(`${baseUrl}/blog/${id}`
  )
if(response.status === 200){
  setBlog(response.data.data)
}  }

  useEffect(()=>{
fetchBlog()
  },[])

  return (
   <Layout>
<div className="mt-20 bg-gray-100 flex flex-col justify-center">
  <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="min-w-[340px]flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <img src={blog?.imageUrl}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>

                                <div
                                    className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>

                            </div>
                            <a href="#"
                                className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                                {blog?.title}</a>


                            <p className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">{blog?.description}</p>

                            <div className="flex justify-center gap-x-3">
                                <Link to={ `/blog/edit/${blog._id}`}
                                    className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
                                    Edit</Link>
                                <button onClick={deleteBlog}
                                    className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold">
                                    Delete</button>
                            </div> <br />
                            <div>
                                <p>Created By:{blog?.userId?.username}</p>
                            </div>

                        </div>
  </div>
    </div>
   </Layout>
  )
}

export default SingleBlog