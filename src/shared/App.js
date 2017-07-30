import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Outline from './Outline';
import SkiDayList from './SkiDayList';

export default () => (
  <div>
    <Home />
    <SkiDayList days={
    [
      {
        resort: "Squaw Valley",
        date: new Date("1/2/2016"),
        powder: true,
        backcountry: false
      },
      {
        resort: "Kirkwood",
        date: new Date("3/28/2016"),
        powder: false,
        backcountry: false
      },
      {
        resort: "Mt. Tallac",
        date: new Date("4/2/2016"),
        powder: false,
        backcountry: true
      }
    ]
    }
   />
  </div>
);