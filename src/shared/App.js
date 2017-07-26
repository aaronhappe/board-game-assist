import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Outline from './Outline';
import SkiDayCount from './SkiDayCount';

export default () => (
  <div>
    <SkiDayCount 
      total={50}
      powder={20}
      backcountry={10}
      goal={100}
    />
    <Route path="/" exact component={Home} />
    <Route path="/outline" exact component={Outline} />
  </div>
);