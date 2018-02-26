import React, { Component } from 'react';
import CounterListItem from "./CounterListItem";

export default class CounterList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ul className="list-group">
          {
            this.props.counterItems.length > 0 ?
             this.props.counterItems.map((item, index) =>
              <CounterListItem
                key={index}
                item={item}
                index={index}
            	  removeItem={this.props.removeItem}
                addClick={this.props.addClick}
                subClick={this.props.subClick}
              />)
              :
              <li>Nothing Yet</li>
           }
        </ul>
        <button onClick={ () => this.props.addItem() }>Add New Counter</button>
      </div>
    );
  }
}
