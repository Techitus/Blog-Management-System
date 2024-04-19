/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Card = ({blog}) => {
  return (
    <>
    <Link to = "/blog/id"/>
    <div className="  max-w-sm rounded overflow-hidden shadow-lg mb-10 space-x-10">
  <img className="w-full" src="blog.imageUrl" alt="image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{blog.title}</div>
    <p className="text-gray-700 text-base">
      { blog.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{blog.catagory}</span>
    
  </div>
</div>
    </>
  )
}

export default Card