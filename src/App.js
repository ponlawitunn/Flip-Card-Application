import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Tab,Tabs } from 'react-bootstrap';

import './App.css';
import Card from './Card/Card';
import Card2 from './Card/Card2';
import DrawButton from './DrawButton/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';
import Home from './component/Home';
import NoteComment from './component/NoteComment';

import { DB_CONFIG } from './config/firebase/db_config';


class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {} 
    }
  }

  componentWillMount(){
    console.log(this.app.database().ref().child('cards'))
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        thai: snap.val().thai,
        sven: snap.val().sven,
        japan: snap.val().japan,
        uttalar: snap.val().uttalar,
        uttalar1: snap.val().uttalar1,
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })

    })
  }

  getRandomCard(currentCards){
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }

    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
            <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="ez-language" title="EZ-Language" disabled>
        <Home />
        </Tab>
        <Tab eventKey="home" title="Home">
        <Home />
        </Tab>
        <Tab eventKey="sweden-thai" title="Sweden-Thai">
        <div className="cardRow">
        <div><h1 className="h1">Sweden - Thai Language</h1></div>
          <Card thai={this.state.currentCard.thai}
                sven={this.state.currentCard.sven}
                uttalar1={this.state.currentCard.uttalar1}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
        <NoteComment />
        </Tab>
        <Tab eventKey="sweden-japan" title="Sweden-Japan">
        <div className="cardRow">
        <div><h1 className="h1">Sweden - Japan Language</h1></div>
          <Card2 japan={this.state.currentCard.japan}
                sven={this.state.currentCard.sven}
                uttalar={this.state.currentCard.uttalar}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
          <NoteComment />
        </div>
        </Tab>
        <Tab eventKey="sweden-iaq" title="Sweden-Iraq">
        <div className="cardRow">
        <div><h1 className="h1">Sweden - Iraq Language</h1></div>
          <Card thai={this.state.currentCard.thai}
                sven={this.state.currentCard.sven}
                uttalar={this.state.currentCard.uttalar}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
        <NoteComment />
        </Tab>
        <Tab eventKey="more" title="More" disabled>
        Learn More
        </Tab>
        
      </Tabs>
      </div>
    );
  }
}

export default App;