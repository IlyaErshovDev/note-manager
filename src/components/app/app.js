import React, { Component } from 'react';

import randomString from './randomStringID.js'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [
        {label: `Now I'm learning React!`, important: true, id: 1 },
        {label: `Awesome!!!!`, important: false, id : 2},
        {label: `Go go go!!!!`, important: false, id: 3 }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldArray = data.slice(0, index);
      const newArray = data.slice(index+1);
      const newData = [...oldArray, ...newArray];
      return {
        data: newData
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: randomString(5)
    }
    this.setState(({data}) => {
      const newData= [...data, newItem];
       console.log(newData);
      return {
        data: newData
      }
    });
  }

  render() {
    return (
      <div className="app">
          <AppHeader/>
            <div className="search-panel d-flex"> 
              <SearchPanel/>
              <PostStatusFilter/>
            </div>
            <PostList posts = {this.state.data} onDelete={ this.deleteItem }/>
            <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}


