import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray : ["Harry","Parry","Tyler","Harper","Sophia","Soul","Seth","Mark","Hozier"],
            userInput :'',
            filteredArray : []
        }
    }

    handleChange(str){
        this.setState({userInput : str});
    }

    filterData(){
        let result = this.state.unFilteredArray.filter(name => name.startsWith(this.state.userInput));

        this.setState({filteredArray : result});
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original : { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={(e) => this.filterData()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered : { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString;