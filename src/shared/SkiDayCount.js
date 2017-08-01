import React from 'react'

class SkiDayCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  componentDidMount() {

  }
  percentToDecimal(decimal){
    return((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal){
    return this.percentToDecimal(total/goal)
  }

  render() {

    return (
      <div className="ski-day-count">
        <div className="percent-days">
          <span>
            {
              this.calcGoalProgress(this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    );
  }
}

SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  sun: 15,
  goal: 75
}

export default SkiDayCount;