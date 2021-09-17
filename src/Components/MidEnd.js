import React from "react";

class MidEnd extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = {
            mydata: this.props.mydata,
            laptop: this.props.myamt,
            screenstate: this.props.mystate    
        }
    } 

    componentDidMount() { 
        alert(`Yang standard aja`) 
    }
    incrementCount = (e) => {
        const gid = e.target.id
        console.log(gid);
        this.setState(this.state.laptop.map((damt) => {if(gid==damt.id && damt.amount<9){
            Object.assign(damt, {amount: damt.amount+1})
        }}))
        console.log(this.state.laptop)
        
    }

    decrementCount = (e) => {
        const gid = e.target.id
        console.log(gid);
        this.setState(this.state.laptop.map((damt) => {if(gid==damt.id && damt.amount>0){
            Object.assign(damt, {amount: damt.amount-1})
        }}))
        console.log(this.state.laptop)
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
                        {this.state.laptop.map((damt) => {if(data.id==damt.id){
                                    return(
                                    <table>
                                    <tr>
                                        <td><button id={damt.id} class="button" onClick={this.decrementCount}>-</button></td>
                                        <td><p className="text-sm font-medium font-bold text-green-900"></p>{`${damt.amount}`}</td>
                                        <td><button id={damt.id} class="button" onClick={this.incrementCount}>+</button></td>
                                    </tr>
                                    </table>
                                    )
                                }})}        
                        </div>  
                         )
                }})}
                </div>
    );
    } 
}
export default MidEnd;