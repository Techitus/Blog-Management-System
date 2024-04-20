import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"

const SingleBlog = () => {
  return (
   <Layout>
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">

<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
    <a href="#"
        className="text-xl sm:text-4xl font-semibold  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
        Best Activewear from the Nordstrom Anniversary Sale</a>

    <div className="relative">
        <a href="#">
            <img className="w-full"
                src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
                alt="Sunset in the mountains"/>
        </a>
        <a href="#!"
            className="hidden  z-10 text-xs absolute bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"><span
                className="text-lg">|</span>&nbsp;&nbsp;<Link to="/blog/edit">Edit</Link></a>

        <a href="#!"
            className="hidden  z-10 text-xs absolute bottom-0 right-0 bg-red-800 px-6 m-2 py-2 text-white hover:bg-white hover:text-red-400 transition duration-500 ease-in-out sm:flex items-center"><span
                className="text-lg">|</span>&nbsp;&nbsp;<span>Delete</span></a>

    </div>
    <p className="text-gray-700 py-5 text-base leading-8">
        Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
        level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred
        Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.
    </p>
    <div className="py-5 text-sm font-regular text-gray-900 flex">
        <span className="mr-3 flex flex-row items-center">
            <svg className="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1"
                // eslint-disable-next-line react/no-unknown-property
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512"  xmlSpace="preserve">
                <g>
                    <g>
                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                </g>
            </svg>
            <span className="ml-1">6 mins ago</span></span>
        <a href="#" className="flex flex-row items-center hover:text-indigo-600">
            <svg className="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                </path>
                <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            <span className="ml-1">AliSher Azimi</span></a>
    </div>
    <hr/>

</div>

</div>
   </Layout>
  )
}

export default SingleBlog