import { Component } from "react";
import Child from './Child'



class DataMount extends Component{
    render(){
        return(
            <>
            <div>data</div>
            <Child title="parent">
                <div>Slots</div>
            </Child>
            </>
        )
    }
}


export default DataMount