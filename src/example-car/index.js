import React, { Component } from 'react'

export default class ExampleCar extends Component {
  constructor(props){
    super(props);
        this.state = {
          img: "./img/imgRedCar.jpg"
      }
    }
handleChangeCar = (img) => {
  this.setState({
    img,
  })
  

}
  
    
    render() {
      const {img} = this.state
        return(
          <div className="container">
            <h3>*ExampleCar</h3>
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={img} alt="Red car" />


              </div>
              <div className="col-md-6">
                <button className="btn btn-danger" onClick={()=>{this.handleChangeCar("./img/imgRedCar.jpg")}}>Red</button>
                <button className="btn btn-light mx-3 " onClick={()=>{this.handleChangeCar("./img/imgSilverCar.jpg")}}>Silver</button>
                <button className="btn btn-dark" onClick={()=>{this.handleChangeCar("./img/imgBlackCar.jpg")}}>Black</button>


                
              </div>


            </div>
          </div>
        )
        
    }
}
