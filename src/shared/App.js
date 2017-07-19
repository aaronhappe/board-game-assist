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
import SidebarItem from './SidebarItem';
import Main from './Main';
import Gist from './Gist';
import Home from './Home';
import { Link, Route } from 'react-router-dom';
import $ from "jquery";

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
        <div>Seconds Elapsed {this.state.secondsElapsed}</div>

        <ul id="messages"></ul>

        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>

      </div>
    );
  }
}

export default App;