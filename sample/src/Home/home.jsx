import React, {Component} from "react";
import Header from "../Header/header";
import Gallery from "../Gallery/gallery";
import Footer from "../Footer/footer";
class Home extends Component{
    render(){
        return(
            <>
           <Header/>
           <Gallery/>
           <Footer/>
            </>
        )
    }
}
export default Home;