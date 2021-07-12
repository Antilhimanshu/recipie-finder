import React,{Component} from 'react';
import './css/RecipieSearch.css';
class RecipieSearch extends Component{
constructor(){
    super();
    this.state = {search:""};
}


getResult = (event)=>{
    event.preventDefault();
    this.props.fetchResult(this.state.search);
}

 
setQuery = (event)=>{
    const state = this.state;
    state['search'] = event.target.value;
    this.setState(state);
    console.log(this.state);
}

render(){
    return(
        <div>
            <h4>Recipie Finder</h4>
            <div>
                <form onSubmit={this.getResult}>
                    <input name="search" id="search" placeholder="Enter the name of the dish" onChange={this.setQuery} style={{textAlign:'center'}}/>
                    <button> Get Recipie</button>
                </form>
            </div>
        </div>
    );
}
}
export default RecipieSearch;