import React from "react";
import "./Card.css"

class MidEnd extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = {
            mydata: this.props.mydata
        }
    } 

    componentDidMount() { 
        alert(`Yang standard aja`) 
    }

    render() { 
        return (
            <div className="bg-white shadow">
                <h2 >Daftar Laptop</h2>
                {this.state.mydata.map((data) => {if(data.midend){
                    return(
                        <div className="card">
                         <img src={data.image} alt="Gambar"/>
                        <div>
                            <p className="desc">{data.nama}</p>
                            <p>{`${data.isads && data.isads === "True" ? "ads" : ""}`}</p>
                            <h3 className={`${data.isPriceBold && data.isPriceBold==="True" ? "font-bold " : ""} `}>
                                 <span aria-hidden="true" className="absolute inset-0" />{data.harga}
                            </h3>
                        </div>
                            <button class="button">Buy</button>        
                        </div>  
                         )
                }})}
                </div>
    );
    } 
}
export default MidEnd;