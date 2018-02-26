import React, { Component } from 'react';
import Greeter from './Greeter.js';

export default class GreeterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

 onInputChange(e) {
   this.setState({
     greeting: e.target.value
   })
 }

 render (){
   return (
     <div>
       <Greeter onInputChange={this.onInputChange} greeting={this.state.greeting} />
     </div>
   )
 }
}
