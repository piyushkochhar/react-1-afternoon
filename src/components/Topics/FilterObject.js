import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray : [
                {
                    color: "red",
                    value: "#f00",
                    transparency : true
                },
                {
                    newColor: "magenta",
                    newValue: "#f0f"
                },
                {
                    color: "yellow",
                    value: "#ff0",
                    transparency : true
                },
                {
                    oldColor: "black",
                    value: "#000"
                }
            ],
            userInput : '',
            filteredArray : []
        }
    }

    handleChange(str){
        this.setState({userInput : str})
    }

    filterData(){
       let result =  this.state.unFilteredArray.filter(obj => obj.hasOwnProperty(this.state.userInput))

       this.setState({filteredArray : result});
        
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original : { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={(e) => {this.handleChange(e.target.value)}}/>
                <button className="confirmationButton" onClick={() => {this.filterData()}}>
                Filter</button>
                <span className="resultsBox filterObjectRB">Filtered :{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject;