import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        const{username, age} = this.props
        return (
            <div>
                <h3>*Child</h3>
                <p>Username: {username} - Age : {age} </p>
                
            </div>
        )
    }
}
