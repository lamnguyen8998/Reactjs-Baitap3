import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        // this.handleLogin = this.handleLogin.bind(this);
        
        this.state = {
        username: "CyberSoft",
        isLogin: false,

        }
        
    }

    handleLogin =() =>{
        this.setState({
            isLogin: true,
        });
        
    };

    // handleLogout = () => {
    //     this.setState({
    //         isLogin:false,
    //     });

    // }

   
    renderHTML() {
        return  this.state.isLogin ? (<div>
            <h1>Hello {this.state.username}</h1>
            <button  className="btn btn-danger"onClick={()=>{
                this.setState({
                    isLogin:false,
                })
            }} >Logout</button>
            
        </div>) :(<button  className="btn btn-success" onClick={this.handleLogin} >Login</button>);   
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3>*State</h3>
                {this.renderHTML()}
                
                
            </div>
            
        )
    }
}
