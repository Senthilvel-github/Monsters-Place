import React, {Component} from 'react';
import './App.css';
import { CardList } from './card-list/card-list.component';
import { SearchBox } from './seach-box/search-box.component';

class App extends Component {

  constructor() {
    super()
    this.state = {
      monstors : [],
      searchValue : ''
    }
  }

  componentDidMount() {
    console.log("Component Mounted!!!!!!")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monstors : users}))
  }

  render() {

    const { monstors, searchValue } = this.state
    const modifiedMonstors = monstors.filter(monstor => 
      monstor.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Place</h1>
       <SearchBox placeholder = 'Search Monsters'
          handleChange = {(e => this.setState({searchValue : e.target.value}))}/>  
        <CardList monstors = {modifiedMonstors}/>
      </div>
    );
  }
}

export default App;
