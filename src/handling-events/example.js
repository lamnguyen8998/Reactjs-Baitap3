import React, { Component } from 'react'

export default class ExampleHandleEvent extends Component {
    constructor(props){
        super(props);
        // this.handleLogin = this.handleLogin.bind(this);
    }

   username = "Nguyễn Vũ Lâm"
   isLogin = false // false là chưa login

//    renderHTML(){
//        if(this.isLogin){
//            return (
//                <div>
//                    <h1>Hello {this.username}</h1>
//                    <button className="btn btn-danger">Log Out</button>
//                </div>
//            ) 
//            } else{
//             return <button className="btn btn-success">Log In</button>
//        }
//    }

// handleLogin(){
//     this.isLogin = true;
// }

handleLogin = () =>{
    this.isLogin = true;
    console.log(this.isLogin)

};
   renderHTML(){
       // 1 === 2 : "Đúng" : "sai"
      return this.isLogin ? (
        <div>
        <h1>Hello {this.username}</h1>
        <button className="btn btn-danger">Log Out</button>
        </div>
       ) : (<button className="btn btn-success" onClick={this.handleLogin}>Log In</button>);

   }



    render(){
        return(
            <div>
                <h3>*ExampleHandleEvent</h3>
                {this.renderHTML()}
            </div>



        )


    }
}
