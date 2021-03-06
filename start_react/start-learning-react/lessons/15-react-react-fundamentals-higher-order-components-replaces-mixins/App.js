// https://jsbin.com/boxoso/edit?js,output

import React from 'react';

//The purpose of a higher order component is to share common functionality or information between multiple components.
// used for LabelHOC =HOC(Label) and  Button = HOC((props) => )
const HOC = (InnerComponent) => class extends React.Component {     
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})            // this is called from the Button (stateless) and Label (full class)
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

const Button = HOC((props) =>
  <button onClick={props.update}>{props.children} - {props.count}</button>
)

class Label extends React.Component {
  componentWillMount(){
    console.log('label will mount')
  }
  render(){               // this.props.update refers to HOC update()
    return (
      <label onMouseMove={this.props.update}>
      {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App
