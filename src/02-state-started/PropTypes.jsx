import { Component } from "react";
import PropTypes, { number } from 'prop-types'

let{
    string,
    // number,
    element,
    instanceOf,
    oneOf,
    oneOfType
}=PropTypes


class AAA extends Component{
    render(){
        return(
            <div>aaaaaaa</div>
        )
    }
}

class BBB extends Component{
    render(){
        return(
            <div>BBBBB</div>
        )
    }
}

const bbb=new BBB()

class Child extends Component {
    static propTypes={
        // title: node
        // title:element
        title:oneOfType([
            string,
            number
        ])
    }

    render() {
        return (
            <>
            {/* <div>child{this.props.title.x}</div> */}
            {/* <div>child{this.props.title.x}</div> */}
            <div>child</div>

            </>
        )
    }

}




export default class extends Component {
    render() {
        return (
            <div>
                {/* <Child title="hello"></Child>
                <Child title={{x:0}}></Child> */}
                {/* <Child title={<AAA/>}></Child> */}
                <Child title={'world'}></Child>
            </div>
        )
    }
}