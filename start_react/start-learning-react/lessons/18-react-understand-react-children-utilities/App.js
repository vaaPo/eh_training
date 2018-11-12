// https://jsbin.com/qiwesa/1/edit

import React from 'react';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    console.log(this.props.children)
     let items = React.Children
        .forEach(this.props.children,
        child => console.log(child.props.className))
    //let items = React.Children.toArray(this.props.children)
//    let items = React.Children.only(this.props.children)
    console.log(items)
    let items2 = React.Children.toArray(this.props.children)
    forEach(items2.props.children)(console.log(items2.props.className))

    return null
  }
}

export default App
