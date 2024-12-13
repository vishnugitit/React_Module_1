import React, {Component} from "react";
import './gallery.css'
class Gallery extends Component{
    render(){
        return(
            <>
           
            <section>
                <div className="one">
                    <h1 className="watch-1"> </h1>
                    <h1 className="watch-2"> </h1>
                    <h1 className="watch-3"> </h1>
                    <h1 className="watch-4"> </h1>
                </div>
                <div className="two">
                    <h1 className="bag-1"> </h1>
                    <h1 className="bag-2"> </h1>
                    <h1 className="bag-3"> </h1>
                    <h1 className="bag-4"> </h1>
                </div>
                <div className="three"> 
                    <h1 className="shoes-1"> </h1>
                    <h1 className="shoes-2"> </h1>
                    <h1 className="shoes-3"> </h1>
                    <h1 className="shoes-4"> </h1>
                </div>
            </section>
            </>
        )
    }
}
export default Gallery;