import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import Card from "./components/card/Card"
import axios from "axios"
import { baseUrl } from "../../config"
const Home = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async ()=>{
  const response =  await axios.get(`${baseUrl}/blog`)
if(response.status === 200){
  setBlogs(response.data.data)
}  }
  useEffect(()=>{
fetchBlogs()
  },[])

  return (
<Layout>
    <div className="flex flex-wrap justify-center mt-6 space-x-10  " key={blogs.id}>
      {
        blogs.length > 0 && blogs.map((blog)=>{
          return (
          <Card key={blog.id} blog={blog}/>

          )

        })
      }
      

    </div>
    
</Layout>
  )
}

export default Home