import React, { Component } from 'react'

export default class HandlingEvents extends Component {
    HandlingEvents(){
        console.log(123)
    }
    HandlingEventParams(username, age, cv){
        console.log(username, age,cv)
    }
    render() {
        return (
            <div>
                <h3>*HandlingEvents</h3>
                <button  className="btn btn-success" onClick={this.HandlingEvents}>HandlingEvents</button>
                <button  className="btn btn-danger" onClick={()=>{this.HandlingEventParams("Lâm", 18, "nhân Viên")}}>HandlingEvents Params</button>
                <button  className="btn btn-info" onClick={()=>{console.log("handle")}}>Handle</button>
                
            </div>
        )
    }
}

