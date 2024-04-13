import Navbar from "../navbar/Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout