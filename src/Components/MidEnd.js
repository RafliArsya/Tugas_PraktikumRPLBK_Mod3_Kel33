import React from "react";

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
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Laptop</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {this.state.mydata.map((data) => {if(data.midend){
                    return(
                        <div className="group relative shadow">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={data.image} alt="Gambar" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                            </div>
                            <div className="mt-4 flex justify-between">
                               <div>
                                   <table>
                                       <tr>
                                           <td><p className="mt-1 text-sm text-gray-500">{data.nama}</p></td>
                                           <td><p className="text-sm font-medium font-bold text-green-900">{`${data.isads && data.isads === "True" ? "ads" : ""}`}</p></td>
                                        </tr>
                                    </table>
                                    <h3 className={`${data.isPriceBold && data.isPriceBold==="True" ? "font-bold " : ""} text-sm text-gray-700`}>
                                        <span aria-hidden="true" className="absolute inset-0" />{data.harga}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )
                }})}
                </div>
            </div>
        </div>
    );
    } 
}
export default MidEnd;