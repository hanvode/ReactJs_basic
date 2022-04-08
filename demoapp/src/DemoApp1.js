import React from "react";

class DemoApp1 extends React.Component {
    constructor(props){
        super(props)

        this.state = {
          "firstName": "Hieu",
          "lastName": "Nguyen",
          "gender" : "Nam",
        }
    }
  
    changeFn = () => {
      return (this.setState({"firstName": "Leo"}))
    }
    changeLn = () => {
      this.setState({"lastName": "Hanvode"})
    }
  render() {
    return( 
        <React.Fragment>
            <h1>Hello World {this.state.firstName}</h1>
            <button>Love You { this.state.lastName}</button>
            <input type="button" value={"Change First Name"} onClick={this.changeFn} />
            <input type="button" value={"Change Last Name"}  onClick= {this.changeLn} />
        </React.Fragment>
  
    )
  }
}
export default DemoApp1
