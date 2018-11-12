// https://jsbin.com/qubonu/1/edit?js,output

import React from 'react';

class App extends React.Component {
  constructor(){
    super();                        // call super() to get our context
    this.state = {items: []}
  }
  componentWillMount(){
    fetch( 'https://swapi.co/api/people/?format=json' )   //use fetch to make an AJAX call to the Star Wars API. We'll just hit up the people endpoint there.
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  render(){
    let items = this.state.items                          //That's going to set that data up.
    if(this.state.filter){
      items = items.filter( item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text"
          onChange={this.filter.bind(this)}/>
        {items.map(item =>                                //interpolate items.map - see row 8 - its and array
                                                          //item.name (due no id) as key to avoid "each child in an array or iterator should have a unique key prop."
          <Person key={item.name} person={item} />)}     
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>    // capital P ! This is Person component with h4, summoned in the above return

export default App
