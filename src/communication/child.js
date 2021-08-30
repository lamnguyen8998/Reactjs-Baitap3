import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo = () =>{
        this.props.getInfoReset("Nguyễn Vũ Lâm", 33);
  }
    render() {
        const{username, age} = this.props
        return (
            <div>
                <h3>*Child</h3>
                <button className="btn btn-danger" onClick={this.handleResetInfo}>ResetInfo</button>
                <p>Username: {username} - Age : {age} </p>
                
            </div>
        )
    }
}
