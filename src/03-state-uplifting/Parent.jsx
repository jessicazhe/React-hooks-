import React,{ Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


class Parent extends Component {

    state={
        data:''
    }
    handleReceiveData(data){
        // console.log(data);
        this.setState({
            data
        })
    }


    render() {
        return (
            <>
            <Child1 onReceiveData={this.handleReceiveData.bind(this)}></Child1>
            <Child2></Child2>

            </>
        )
    }
}
export default Parent 