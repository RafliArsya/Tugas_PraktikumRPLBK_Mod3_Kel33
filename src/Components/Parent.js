import { Component } from "react"; 
import React from "react"; 
import data from '../data.json';
//import SecondChild from "./SecondChild"; 
//import FirstChild from "./FirstChild"; 
import LowEnd from "./LowEnd";
import MidEnd from "./MidEnd";
import HighEnd from "./HighEnd";
import "./Card.css";
 
 
class Parent extends Component { 
    state = { 
        LowEnd: false, 
        MidEnd: false, 
        HighEnd: false,
        myjson: data,
        laptop: [
                {    id: 0,
                    amount: 0
                },
                {
                    id: 1,
                    amount: 0
                },
                {
                    id: 2,
                    amount: 0
                },
                {
                    id: 3,
                    amount: 0
                },
                {
                    id: 4,
                    amount: 0
                },
                {
                    id: 5,
                    amount: 0
                },
                {
                    id: 6,
                    amount: 0
                },
                {
                    id: 7,
                    amount: 0
                },
            ],
        screenstate:0
    } 

    handleCallback = (childData) =>{
        this.setState({laptop: childData})
    }

    componentDidUpdate(prevProps, prevState, snapshot) { 
        console.log(this.state.screenstate) 
    }

    componentDidMount() { 
        console.log(this.state.screenstate) 
    }

    togglelowend = () => { 
        this.setState(() => { 
            return { 
                LowEnd: !this.state.LowEnd 
            } 
        }) 
        if (!this.state.LowEnd){
            this.state.screenstate= this.state.screenstate+1
        }else{
            this.state.screenstate= this.state.screenstate-1
        }
    } 
    togglemidend = () => { 
        this.setState(() => { 
            return { 
                MidEnd: !this.state.MidEnd 
            } 
        }) 
        if (!this.state.MidEnd){
            this.state.screenstate= this.state.screenstate+2
        }else{
            this.state.screenstate= this.state.screenstate-2
        }
    } 
    togglehighend = () => { 
        this.setState(() => { 
            return { 
                HighEnd: !this.state.HighEnd 
            } 
        }) 
        if (!this.state.HighEnd){
            this.state.screenstate= this.state.screenstate+4
        }else{
            this.state.screenstate= this.state.screenstate-4
        }
    } 

    //ubahKomponenMuncul2 = () => { 
    //    this.setState(() => { 
    //        return { 
    //            secondChild: !this.state.secondChild 
    //        } 
    //    }) 
    //} 
 
    render() { 
        return ( 
            <> 
                {/* <h1>Katalog Laptop</h1>  */}
                <div style={{ display: "flex" }}> 
                    <div style={{ width: "35%" }}> 
                        <button 
onClick={this.togglelowend}>{this.state.LowEnd ? 'Sembunyikan' : 
'Tampilkan'} Low End!</button> 
                        {this.state.LowEnd && <LowEnd mydata={this.state.myjson} myamt={this.state.laptop} mystate={this.state.screenstate}/>} 
                    </div> 
                    <div style={{ width: "35%" }}> 
                        <button 
onClick={this.togglemidend}>{this.state.MidEnd ? 'Sembunyikan' : 
'Tampilkan'} Mid End!</button> 
                        {this.state.MidEnd && <MidEnd mydata={this.state.myjson} myamt={this.state.laptop} mystate={this.state.screenstate}/>} 
                    </div> 
                    <div style={{ width: "35%" }}> 
                        <button 
onClick={this.togglehighend}>{this.state.HighEnd ? 'Sembunyikan' : 
'Tampilkan'} High End!</button> 
                        {this.state.HighEnd && <HighEnd mydata={this.state.myjson} myamt={this.state.laptop} mystate={this.state.screenstate} parentCallback = {this.handleCallback}/>} 
                    </div> 
                </div> 
            </> 
        ); 
    } 
} 
 
export default Parent;