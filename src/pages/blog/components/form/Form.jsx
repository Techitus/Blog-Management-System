import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Form = ({type, onSubmit}) => {
  // eslint-disable-next-line no-undef
  const [data,setdata] = useState({
title : '',
subtitle : '',
description : '',
catagory : ' ',
image : ''
  })
  const handleChange = (e) => {
    const {name, value} =e.target
    setdata({
     ...data,
     [name]: name === 'image' ? e.target.files[0] : value
    })
  }
const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    onSubmit(data)  
}
  return (
<>
<form onSubmit={handleSubmit}>
<div className="max-w-2xl mx-auto p-4 bg-[#f2f2f2]">
   
      <h2 className="text-center text-4xl mt-5 font-bold">{type}</h2> <br />
        <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Title</label>
            <input type="text" id="title" name="title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" onChange={handleChange} required/>
        </div>
<div className="mb-6">
            <label htmlFor="subtitle" className="block text-lg font-medium text-gray-800 mb-1">Subtitle</label>
            <input type="text" id="subtitle" name="subtitle" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" onChange={handleChange} required/>
        </div>
        <div className="mb-6">
            <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-1">Category</label>
            <input type="text" id="category" name="category" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"onChange={handleChange} required/>
        </div>
        <div className="mb-6">
            <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-1">Description</label>
            <textarea id="description" name="description" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" onChange={handleChange} required></textarea>
        </div>

        <div className="mb-6">
            <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">Image</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="w-full"/>
        </div>

        <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
        </div>
</div>

</form>
 </>
  )
}

export default Form