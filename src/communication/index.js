import React, {Component } from 'react'
import Child from './child';



export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "Nguyễn Vũ Lâm",
            age: 32
        }
    }
    
    
    render() {
        return (
            <div>
                <h3>*Communication</h3>
                <p>Username: {this.state.username} -  Age: {this.state.age} </p>
                <hr width="50%"/>
                <Child username={this.state.username} age={this.state.age} />
          

            </div>
        )
    }
}
