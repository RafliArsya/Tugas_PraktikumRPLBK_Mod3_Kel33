import React from "react";

class HighEnd extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = {
            mydata: this.props.mydata,
            laptop: this.props.myamt,
            screenstate: this.props.mystate    
        }
    }

    componentDidMount() { 
        alert(`Pastikan uang anda mencukupi`) 
        //console.log(this.state.laptop)
        //console.log(this.state.mydata)
        //console.log(this.state.windowCounters)
    }

    componentDidUpdate(prevProps, prevState, snapshot) { 
        alert(`Component Updates! State angka sebelumnya`) 
    }

    incrementCount = (e) => {
        const gid = e.target.id
        //const newState = { count: this.state.count + 1 }
        console.log(gid);
        this.setState(this.state.laptop.map((damt) => {if(gid==damt.id&&damt.amount<9){
            Object.assign(damt, {amount: damt.amount+1})
        }}))
        console.log(this.state.laptop)
        //this.setState(prevState => ({
        //    windowCounters: prevState.windowCounters.map(
        //    data => (data.id === gid ? 
        //        Object.assign(data, { amount: data.amount+1 }) : data),
        //  ),
        //}));
        //this.props.parentCallback(this.state.laptop);
        //console.log(this.state.windowCounters)
    }

    decrementCount = (e) => {
        const gid = e.target.id
        console.log(gid);
        this.setState(this.state.laptop.map((damt) => {if(gid==damt.id && damt.amount>0){
            Object.assign(damt, {amount: damt.amount-1})
        }}))
        console.log(this.state.laptop)
    }

    render(){
        return (
            <div className="bg-white shadow">
                <h2 >Daftar Laptop</h2>
                {this.state.mydata.map((data) => {if(data.highend){
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
export default HighEnd;