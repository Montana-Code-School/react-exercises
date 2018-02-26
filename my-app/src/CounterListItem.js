import React, { Component } from 'react';

export default class CounterListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <li className="list-group-item ">
        <div>
          <button onClick={() =>
            this.addClick(
              parseInt(this.props.index, 10)
            )}>
            Up
          </button>
          <button onClick={() =>
            this.subClick(
              parseInt(this.props.index, 10)
            )}>
            Down
          </button>
          {this.props.item.value}
          {this.props.item.count}
          <button
            type="button"
            className="close"
          	onClick={() => this.removeItem(this.props.index)}
          >
          &times;
          </button>
        </div>
      </li>
    );
  }
}
