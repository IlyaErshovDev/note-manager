import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
  return (
      <div className="bottom-panel d-flex">
        <input
        type = "text"
        placeholder = "Текст заметки..."
        className = "form-control new-post-label"
        ></input>

        <button 
          type="submit"
          className="btn btn-outline-dark"
          onClick={() => onAdd('hello')}>
            Добавить</button>
        
      </div>
  )
}

export default PostAddForm;