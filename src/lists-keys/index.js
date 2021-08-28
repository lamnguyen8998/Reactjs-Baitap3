import React, { Component } from 'react'

export default class Listskeys extends Component {
    constructor(props){
        super(props);
        this.state ={
            listUser:[
                {ten:"Lâm", tuoi:32},
                {ten:"Tài", tuoi:29},
                {ten:"Bảo", tuoi:31},
            ],
        };
    }
    renderUser = () => {
        const {listUser} = this.state;
       return listUser.map((user, index)=>{
            return(
                <li key={index}>
                    Tên:{user.ten} - Tuổi: {user.tuoi}
                </li>
            );
        });   
        
    }
    render() {
        
        return (
            <div>
                <h3>*Listskeys</h3>
                <ul>
                 {this.renderUser()}


                </ul>
            </div>
        )
    }
}
