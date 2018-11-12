// https://jsbin.com/qonaga/edit?js,output

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App
/**Have a look at the source code in the repo, https://github.com/joemaddalone/egghead-react-fundamentals-es6/tree/master/lessons/14-build-compiler

I bring in a lib called Behave to get the indentation. It's not React-related and therefore not discussed, but keeps you from having to watch me futz around lining things up. :)
 */
