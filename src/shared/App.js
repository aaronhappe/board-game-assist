import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Outline from './Outline';
import SkiDayList from './SkiDayList';

export default () => (
  <div>
    <Home />
    <SkiDayList />
  </div>
);