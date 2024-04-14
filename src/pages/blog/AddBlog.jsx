import Layout from "../../components/layout/Layout";

const AddBlog = () => {
  return (
    <>
      <Layout>
<form>
  <div className="  md:px-20 pt-6">
    <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="text-lx font-serif">Title:</label>
          <input type="text" placeholder="title" id="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
          <textarea id="description" cols="30" rows="10" placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>
        <div>
          <label htmlFor="name" className="text-lx font-serif">Name:</label>
          <input type="text" placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="text-lx font-serif">Email:</label>
          <input type="text" placeholder="name" id="email" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
      </div>
    </div>
  </div>
</form>
      </Layout>
    </>
  );
};

export default AddBlog;
