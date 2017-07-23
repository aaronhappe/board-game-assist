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
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    var socket = io();
    socket.on('connect', function(){
    });

      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });

  }

  render() {

    return (
      <div>
        <SkiDayCount />
        asdf
        <div>Seconds Elapsed {this.state.secondsElapsed}</div>
        
        <ul id="messages">df</ul>

        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>

      </div>
    );
  }
}

export default App;