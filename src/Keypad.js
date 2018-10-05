import React, { Component } from 'react';
import './App.css';

const keyValues = [
  'ans', '(', ')', '/',
  '7','8','9','x',
  '6','5','4','-',
  '3','2','1','+',
  'AC','0','.','=',
];

export class Key extends Component {
  render() {
    return (
      <button className="box" onClick={ () => this.props.onClick(this.props.value) }>
        { this.props.value }
      </button>
    );
  }
}

export class Keypad extends Component {
  render() {
    let keyElementArray = [];

    for (var i = 0; i < 20; ++i) {
      keyElementArray.push(
      <Key
        key={'key-' + i}
        value={ keyValues[i] }
        onClick={ (keyValue) => this.props.onClick(keyValue) }
      />);
    } 

    return (
      <div>
        {keyElementArray.slice(0,4)}
        <br/>
        {keyElementArray.slice(4,8)}
        <br/>
        {keyElementArray.slice(8,12)}
        <br/>
        {keyElementArray.slice(12,16)}
        <br/>
        {keyElementArray.slice(16,20)}
        <br/>
      </div>
    );
  }
}