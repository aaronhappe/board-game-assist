import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Outline from './Outline';
export default () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/outline" exact component={Outline} />
  </div>
);