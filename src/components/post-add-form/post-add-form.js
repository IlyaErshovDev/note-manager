import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValChange = this.onValChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onValChange(e) {
    this.setState({
      text: e.target.value
    })
  } 
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }
  
  render() {
      return (
          <form className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
            type = "text"
            placeholder = "Текст заметки..."
            className = "form-control new-post-label"
            onChange = {this.onValChange}
            value = {this.state.text}
            ></input>

            <button 
              type="submit"
              className="btn btn-outline-dark"
              >
                Добавить</button>
            
          </form>
      )
    }
}
