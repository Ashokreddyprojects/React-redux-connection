import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitValue} from './actions/actions';



class App extends Component {


     constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
   }




    inputValue(e)
    {
        //console.log(e.target.value)
         this.setState({value:e.target.value});
        
        
    }

    valueSubmmit()
    {
        //alert(this.state.value)
        this.props.submitValue({itemList:this.state.value})
        
    }


  render() {
    return (
      <div>

        <input type="text" name="list"  onChange={this.inputValue.bind(this)} />
           <button onClick={this.valueSubmmit.bind(this)}>Add</button>

    <span>{this.props.item.itemList}</span>
    
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
   item:state.item
});

const mapDispatchToProps = {
    submitValue,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
