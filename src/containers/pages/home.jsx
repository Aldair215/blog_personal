import BlogList from "components/home/blogList"
import CTA from "components/home/cta"
import Features from "components/home/feature"
import Header from "components/home/header"
import Incentives from "components/home/incentives"
import LogoCloud from "components/home/logoCloud"
import UseCases from "components/home/useCases"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home