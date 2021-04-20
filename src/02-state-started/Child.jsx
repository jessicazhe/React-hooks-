import { Component } from "react";



// export default class Child extends Component{
//     render(){
//         return(
//             <div>
//                 child {this.props.title}
//             </div>
//         )
//     }
// }

// Child.defaultProps={
//     title: "default value"
// }


// export default (props)=>{
//     return(
//         <div>child {props.title}</div>
//     )
// }

export default function Child(props){
    return(
        <>
        <div>child {props.title}</div>
        {'hello'}
        </>
    )
}

