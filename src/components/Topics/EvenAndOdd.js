import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ''
        }
    }

    handleChange(userInput){
        this.setState({userInput : userInput});
    }

    displayEvenAndOdd(){
        let arr = this.state.userInput.split(',');
        let even =[];
        let odd = [];
        
        arr.forEach(num => {
            if(num%2 === 0){
                even.push(Number(num));
            } else {
                odd.push(Number(num));
            }
        });

        this.setState({evenArray : even, oddArray : odd});
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value)}}/>
                <button className="confirmationButton" onClick={ () => {this.displayEvenAndOdd();}}>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd;