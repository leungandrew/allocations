import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

class App extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  onClick = () => {
    this.setState({open: true});
  }

  render() {
    return (
      <div className="App">
        <Button id="hello-world" variant="contained" color="primary" onClick={this.onClick}>
          Hello World!
        </Button>
        <Dialog open={this.state.open} id="dialog">
          <div>
            Hi
          </div>
        </Dialog>
      </div>
    );
  }
}

export default App;
