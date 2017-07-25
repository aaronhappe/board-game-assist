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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dieVal: 0};
    
    this.handleDieRoll = this.handleDieRoll.bind(this);
  }

  handleDieRoll() {

    var dieInitNum = Math.random(),
    dieAns = Math.floor((dieInitNum * 6) + 1);

    this.setState(() => ({
      dieVal: dieAns
    }));
    return document.forms["dieSubmit"].submit();
  }

  componentDidMount() {
    var socket = io();
    socket.on('connect', function(){
      console.log('connected');
    });
    
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return true;
      });

      socket.on('chat message', function(returnDie){
        console.log(returnDie);
        $('#messages').append($('<li>').text(returnDie));
      });
  }

  render() {

    return (
      <div>
        <div>Die Value: </div>
          <span className="rollButton" onClick={this.handleDieRoll}>
            roll die
          </span>
          <ul id="messages"></ul>

          <form id="dieSubmit" action="">
            <input id="m" autocomplete="off" value="{this.state.dieVal}" />
          </form>
      </div>
    );
  }
}

export default App;