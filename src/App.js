import React,{Component} from 'react';
import './App.css';
import {ClassList} from './components/card-list/card-list.component'
import {SearchBox} from './components/Search-box/search-box.component';
import './index.css';

class App extends Component{

  constructor(){
    super();

    this.state={
      monsters:[],
      searchfield:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }

  render(){
    let {monsters,searchfield}=this.state;
    let filteredMonster=monsters.filter(a =>
      a.name.toLowerCase().includes(searchfield.toLowerCase())
    )

   return (
    <div className="App">
    <h1 className="code">Monster Roldex</h1>
    <SearchBox placeholder="Search Robot" handlechange={e=>this.setState({searchfield:e.target.value})} ></SearchBox>
    <ClassList monsters={filteredMonster}></ClassList>
    </div>);
  }

}

export default App;
