import Layout from "../../components/layout/Layout"
import Card from "./components/card/Card"

const Home = () => {
  return (
<Layout>
    <div className="flex flex-wrap justify-center mt-6 space-x-5">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    
</Layout>
  )
}

export default Home