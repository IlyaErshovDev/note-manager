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
        { id: 'sdDGGGL', label: `Now I'm learning React!`, important: true, like: false },
        { id : 'SLDGFG', label: `Awesome!!!!`, important: false, like: false},
        { id: 'FGJHKJ', label: `Go go go!!!!`, important: false, like: false }
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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
      id: randomString(5),
      label: body,
      important: false,
      like: false
    }
    this.setState(({data}) => {
      const newData= [...data, newItem];
      return {
        data: newData
      }
    });
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldVal = data[index];
      const newVal = {...oldVal, important: !oldVal.important};
      const newArr = [...data.slice(0, index), newVal, ...data.slice(index +1)]
      return {
        data: newArr
      }
    }); 
  }
  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldVal = data[index];
      const newVal = {...oldVal, like: !oldVal.like};
      const newArr = [...data.slice(0, index), newVal, ...data.slice(index +1)]
      return {
        data: newArr
      }
    }); 
  }
  
  postSearch(items, term) {
    if (term.length === 0 ) {
      return items
    }
    return items.filter( (item) => {
      return item.label.indexOf(term) > -1
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like )
    } else {
      return items
    }
  }
  onFilterSelect(filter) {
    this.setState({filter})
  }

  onUpdateSearch(term) {
    this.setState({term})
  }


  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item=>item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.postSearch(data, term), filter);

    return (
      <div className="app">
            <AppHeader liked = {liked} allPosts = {allPosts}/>
            <div className="search-panel d-flex"> 
              <SearchPanel onUpdateSearch = { this.onUpdateSearch }/>
              <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList posts = {visiblePosts} onDelete={ this.deleteItem }
            onToggleImportant={ this.onToggleImportant } onToggleLiked = { this.onToggleLiked }/>
            <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}


