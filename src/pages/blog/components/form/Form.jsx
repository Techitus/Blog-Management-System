
// eslint-disable-next-line react/prop-types
const Form = ({type}) => {
  // eslint-disable-next-line no-undef
  
    
  return (
<>
<form>
<div className="max-w-2xl mx-auto p-4 bg-[#f2f2f2]">
    <form action="/submit-post" method="POST">
      <h2 className="text-center text-4xl mt-5 font-bold">{type}</h2> <br />
        <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Title</label>
            <input type="text" id="title" name="title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required/>
        </div>

        <div className="mb-6">
            <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">Content</label>
            <textarea id="content" name="content" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" required></textarea>
        </div>

        <div className="mb-6">
            <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">Image</label>
            <input type="file" id="image" name="image" accept="image/*" className="w-full"/>
        </div>

        <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
        </div>
    </form>
</div>
<script>
    
</script>

</form>
 </>
  )
}

export default Form