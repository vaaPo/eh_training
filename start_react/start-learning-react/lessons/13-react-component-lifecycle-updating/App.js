// https://jsbin.com/deliwe/edit?js,console,output

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();                                // so this can be used
    this.state = {increasing: false}        // set state to false for "increasing"
  }
  update(){
    ReactDOM.render(
      <App val={this.props.val + 1} />,     // render with val+1
      document.getElementById('root'))      //We're actually going to rerender our entire component.
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})   // will print false for first 0 and after that true always because increasing 1,2,3,4,...
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;                    // will printe when 5,10,15,20...
  }
  render(){
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)          // will print 4 for 5th click, 9 for 10th click, 14 for 15th click..
  }
}

App.defaultProps = {val: 0}

export default App
