import React, { Component } from 'react'

export default class RederingElements extends Component {
    username = "Nguyễn Vũ Lâm";
    age = "32"
    lop = "BC14"
    renderInfo(){
       return (
       <>
        <p>Hello {this.username} - Tuổi: {this.age}</p>
                <p>Lớp: {this.lop}</p>
                </>
       );

    }
    render() {
        return (
            <div>
                <h3>*RederingElements</h3>
                {this.renderInfo()}
                
            </div>
        )
    }
}

