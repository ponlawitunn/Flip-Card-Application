import React, { Component } from 'react';
import './NoteComment.css';

const ListItem = ({ value, onClick }) => (
    <p className="p0" onClick={onClick}>{value}</p>
  );
  
  const List = ({ items, onItemClick }) => (
    <ul>
      {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
      }
    </ul>
  );
  
  export default class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        textValue: []
      };
    }
  
    onClick = () => {
      const { inputValue, textValue } = this.state;
      if (inputValue) {
        const nextState = [...textValue, inputValue];
        this.setState({ textValue: nextState, inputValue: '' });
      }
    }
  
    onChange = (e) => this.setState({ inputValue: e.target.value });
  
    handleItemClick = (e) => {console.log(e.target.innerHTML)}
  
    render() {
      const { textValue, inputValue } = this.state;
      return (
        <div className="commentNote">
          <input placeholder="Write down if you want to Note it..." type="text" value={inputValue} onChange={this.onChange} />
          <button onClick={this.onClick}>Note It</button>
          <List items={textValue} onItemClick={this.handleItemClick} />
        </div>
      );
    }
  }