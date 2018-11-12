// https://jsbin.com/zijoxu/edit?js,output

import React from 'react';

class App extends React.Component {
  constructor(){
    super();    //This is going to give the keyword this the context within our component, rather than its parent class React.Component.
    this.state = {
      txt: 'this is the state txt',       // txt is key
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value})    //It's important to note here that, the call of this.setState only overwrites the values that we actually send into it.
  }
  // interpolating {this.state.txt} in JSX
  render(){
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
          <h1>{this.state.txt} - {this.state.cat}</h1>        
      </div>
    )
  }
}

export default App
