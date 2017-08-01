import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Outline from './Outline';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';
import AddDayForm from './AddDayForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allSkiDays: [
      {
        resort: "Squaw Valley",
        date: new Date("1/2/2016"),
        powder: true,
        sun: false
      },
      {
        resort: "Kirkwood",
        date: new Date("3/28/2016"),
        powder: false,
        sun: false
      },
      {
        resort: "Mt. KittyBear",
        date: new Date("4/2/2016"),
        powder: false,
        sun: true
      }
    ]};
  }
  countDays(filter) {
    return this.state.allSkiDays.filter(function(day){
      if(filter) {
        return day[filter]
      } else {
        return day
      }
    }).length
  }
  render() {
    return (
      <div className="app">
          <SkiDayList days={this.state.allSkiDays} />
          <SkiDayCount 
            total={this.countDays()}
            powder={this.countDays("powder")}
            sun={this.countDays("sun")}
          />
          <Link to={'/form'}>
            FORM
          </Link>

      </div>
    )
  }
}

export default App;