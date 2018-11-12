// https://jsbin.com/yirifo/edit?html,js,output

import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
  render(){
   let txt = this.props.txt
   let cat = this.props.cat
    return (<div>
            <h1>{cat} {txt}</h1>
            <h1>App Hello</h1>
            </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}


App.defaultProps = {
  txt: "App this is the default text, no override"
}

export default App
