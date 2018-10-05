import React, { Component } from 'react';
//import logo from './logo.svg';
import { Keypad } from './Keypad';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      expression: '',
      isEvaluated: false
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(keyValue) {
    switch (keyValue) {
      case '=':
        let result;

        try {
          result = eval(this.state.expression);
        } catch (error) {
          result = 'SYNTAX ERROR';
        }

        this.setState({
          isEvaluated: true,
          expression: '',
          answer: result
        });
        break;

      case 'AC':
        this.setState({
          isEvaluated: false,
          expression: ''
        });
        break;

      case 'ans':
        if(this.state.answer !== 'SYNTAX ERROR') {
          this.setState({
            isEvaluated: false,
            expression: this.state.expression + this.state.answer
          });
        }
       
        break;

      case 'x':
        this.setState({
          isEvaluated: false,
          expression: this.state.expression + '*'
        });
        break;
    
      default:
        this.setState({
          isEvaluated: false,
          expression: this.state.expression + keyValue
        });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="outputWindow">
          {this.state.isEvaluated ? this.state.answer : this.state.expression}
        </div>
        <Keypad onClick={(keyValue) => this.handleClick(keyValue)} />
        <br/>
      </div>
    );
  }
}

export default App;
