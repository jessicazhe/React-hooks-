import React ,{ Component } from 'react'

export default class State extends Component{


    state={
        isShow:true,
        count:0,
        list:[<li key="a">a</li>,<li key="b">b</li>,<li key="c">c</li>]
    }

    // 构造函数
    // constructor(props){
    //     super(props)
        
    //     this.state={
    //         isShow:true
    //     }
    // }

   render(){
     return(
        <div>
            {
                this.state.isShow && <div>State{this.state.count}</div>
            }
            <ul>
                {
                    this.state.list.map(value=>{
                        return(
                            <li key={value}>{value}</li>
                        )
                    })
                }
            </ul>
        </div>
         )
     }

     componentDidMount(){
         
        
        setTimeout(()=>{

            // this.setState(prevState=>{
            //     // isShow:!this.state.isShow
            //     return{
            //         count:prevState.count+1
            //     }
            // })


            
            this.setState({
                // isShow:false
                count:1
            })

         },3000)


         this.state.list.push('d')
         this.setState({})
        //  this.forceUpdata()

         
     }
}