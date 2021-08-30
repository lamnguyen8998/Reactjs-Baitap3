import React, {Component } from 'react'
import Child from './child';
import ChildFunction from './childFunction';
import Children from './children';



export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "Nguyễn Vũ Lâm",
            age: 32
        }
    }
  handleChangeInfo = () =>{
      // Thay đổi username 
      this.setState({
          username:"Nhân viên lập trinh",
      })
  };
  handleResetInfo = (username,age) =>{
    this.setState({
        username, age
    })
  };
    
    render() {
        
        return (
            <div>
                <h3>*Communication</h3>
                <p>Username: {this.state.username} -  Age: {this.state.age} </p>
                <button className="btn btn-success" onClick={this.handleChangeInfo} >Change Info</button>
                <hr width="50%"/>
                <Child username={this.state.username} age={this.state.age} getInfoReset={this.handleResetInfo} />

                <hr width="50%"/>

                <ChildFunction username={this.state.username} age={this.state.age} />
                <hr width="50%"/>
                <Children>
                    <p> 
                        Username: {this.state.username} - Age: {this.state.age} 
                    </p>
                    <h6>Hello Nguyễn Vũ Lâm</h6>
                </Children>
            </div>
        )
    }
}
