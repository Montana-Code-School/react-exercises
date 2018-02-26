import React, { Component } from 'react';
import CounterList from "./CounterList";

let counterItems = []

export default class CounterListApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counterItems: counterItems
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addClick = this.addClick.bind(this);
    this.subClick = this.subClick.bind(this);
  }

  modifyItems(action, index) {
    switch (action) {
      case 'incItem':
        let counterItems = this.state.counterItems[itemIndex].count--
        this.setState({counterItems: counterItems});
        break;
      case 'decItem':
        let counterItems = this.state.counterItems[itemIndex].count++
        this.setState({counterItems: counterItems});
        break;
      case 'addItem':
        this.state.counterItems.unshift({
         index: counterItems.length + 1,
         value: "Number " + counterItems.length + 1,
         count: 0
        });
        this.setState({ counterItems: counterItems });
        break;
      case 'remItem':
        let counterItems = this.state.counterItems.splice(itemIndex, 1);
        this.setState({ counterItems: counterItems });
        break;
      default:

    }
  }

  addItem() {
    this.state.counterItems.unshift({
     index: counterItems.length + 1,
     value: "Number " + counterItems.length + 1,
     count: 0
    });
    this.setState({ counterItems: counterItems });
  }

  removeItem (itemIndex) {
    let counterItems = this.state.counterItems.splice(itemIndex, 1);
    this.setState({ counterItems: counterItems });
  }

  addClick (itemIndex) {
    let counterItems = this.state.counterItems[itemIndex].count++
    this.setState({counterItems: counterItems});
  }

  subClick (itemIndex) {
    let counterItems = this.state.counterItems[itemIndex].count--
    this.setState({ counterItems: counterItems });
  }

  render() {
    return (
      <div>
        <CounterList
          counterItems={this.state.counterItems}
        	removeItem={this.removeItem}
          addItem={this.addItem}
          subClick={this.subClick}
          addClick={this.addClick}
        />
      </div>
    );
  }
}
