import React, { Component } from 'react';

export default class Greeter extends Component {
  constructor(props) {
    super(props);
  }

 render (){
   return (
     <div>
       <input
         className="someClass"
         onChange={(e) => this.props.onInputChange(e)}
         type="text"
         value={this.props.greeting}
        />
       <div>{this.props.greeting ? `Welcome to React, ${this.props.greeting}` : ``}</div>
     </div>
   )
 }
}
