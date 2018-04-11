import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state ={
            userInput : '',
            palindrome : ''
        }
    }

    handleChange(str){
        this.setState({userInput: str})
    }

    checkPalindrome(){
        let strReverse = this.state.userInput.split("").reverse().join("")
        let flag = false;
        if(this.state.userInput === strReverse){
            flag = true;
        }

        this.setState({palindrome : flag})
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => {this.handleChange(e.target.value)}}/>
                <button className="confirmationButton" onClick={() => {this.checkPalindrome()}}>Check</button>
                <span className="resultsBox">Palindrome : { JSON.stringify(this.state.palindrome) }</span>
            </div>
        )
    }
}

export default Palindrome;