import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1 : 0,
            number2 : 0,
            sum : null
        }

    }

    handleChangeInput1(num1){
        this.setState({number1 : Number(num1)})
    }

    handleChangeInput2(num2){
        this.setState({number2 : Number(num2)})
    }

    sum(){
        this.setState({sum : (this.state.number1 + this.state.number2)})
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => {this.handleChangeInput1(e.target.value)}}/>
                <input className="inputLine" onChange={(e) => {this.handleChangeInput2(e.target.value)}}/>
                <button className="confirmationButton" onClick={() => {this.sum()}}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;