import { Component } from "react"; 
import React from "react"; 
import data from '../data.json';
//import SecondChild from "./SecondChild"; 
//import FirstChild from "./FirstChild"; 
import LowEnd from "./LowEnd";
import MidEnd from "./MidEnd";
import HighEnd from "./HighEnd";
 
 
class Parent extends Component { 
    state = { 
        LowEnd: false, 
        MidEnd: false, 
        HighEnd: false,
        myjson: data
    } 
 
    togglelowend = () => { 
        this.setState(() => { 
            return { 
                LowEnd: !this.state.LowEnd 
            } 
        }) 
    } 
    togglemidend = () => { 
        this.setState(() => { 
            return { 
                MidEnd: !this.state.MidEnd 
            } 
        }) 
    } 
    togglehighend = () => { 
        this.setState(() => { 
            return { 
                HighEnd: !this.state.HighEnd 
            } 
        }) 
    } 

    ubahKomponenMuncul2 = () => { 
        this.setState(() => { 
            return { 
                secondChild: !this.state.secondChild 
            } 
        }) 
    } 
 
    render() { 
        return ( 
            <> 
                <h1>Ini Parent</h1> 
                <div style={{ display: "flex" }}> 
                    <div style={{ width: "30%" }}> 
                        <button 
onClick={this.togglelowend}>{this.state.LowEnd ? 'Sembunyikan' : 
'Tampilkan'} Low End!</button> 
                        {this.state.LowEnd && <LowEnd mydata={data}/>} 
                    </div> 
                    <div style={{ width: "30%" }}> 
                        <button 
onClick={this.togglemidend}>{this.state.MidEnd ? 'Sembunyikan' : 
'Tampilkan'} Mid End!</button> 
                        {this.state.MidEnd && <MidEnd mydata={data}/>} 
                    </div> 
                    <div style={{ width: "30%" }}> 
                        <button 
onClick={this.togglehighend}>{this.state.HighEnd ? 'Sembunyikan' : 
'Tampilkan'} High End!</button> 
                        {this.state.HighEnd && <HighEnd mydata={data}/>} 
                    </div> 
                </div> 
            </> 
        ); 
    } 
} 
 
export default Parent;