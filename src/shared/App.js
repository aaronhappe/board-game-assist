/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SkiDayCount from './SkiDayCount';
import { Link, Route } from 'react-router-dom';
import $ from "jquery";
// import '../client/scss/main.scss'

const style = {
    display: 'flex',
    alignItems: 'stretch'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {diceRoll: 0};
  }

  rollDie() {
    var rando = Math.random(),
    rolled = 1 + Math.floor(rando * 6);
    console.log(rolled);
    this.setState((prevState, props) => {
      console.log(rolled);
      return {diceRoll: rolled};
    });
    console.log(this.state.diceRoll);
    // return diceRoll
  }

  componentDidMount() {
    console.log('here? ');
    this.rollDie();
    // var socket = io();
    // socket.on('connect', function(){
    // });

      // $('form').submit(function(){
      //   socket.emit('chat message', $('#m').val());
      //   $('#m').val('');
      //   return false;
      // });
      // socket.on('chat message', function(msg){
      //   $('#messages').append($('<li>').text(msg));
      // });


  }

  render() {

    return (
      <div>
        <SkiDayCount />
        asdf
        <div>Dice Roll: {this.state.diceRoll}</div>
        {
        /*
        <ul id="messages">df</ul>

        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
        */
        }
      </div>
    );
  }
}

export default App;