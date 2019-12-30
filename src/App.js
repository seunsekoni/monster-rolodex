import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends Component {
  constructor(){
    super();

    this.state = {
      string : 'Hello Mike',
      newString: 'Hello React',
      searchField: '',
      monsters :[]
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  // handle the changes that comes from the searchbox and auto updates
  handleChange = e => {
    this.setState({searchField : e.target.value})
  }
  render() {

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>


      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    <code>{this.state.string}</code>*/}
      {/*  </p>*/}
      {/*  <button onClick={()=> this.setState({string: this.state.newString})}>Change Text</button>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
    )
  }
}

export default App;
