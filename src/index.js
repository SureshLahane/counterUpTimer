import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: null,
      hours: null,
      divisor_for_minutes: null,
      minutes: null,
      divisor_for_seconds: null,
      seconds: null
    };

    this.countUp = this.countUp.bind(this);
    this.startCounting = this.startCounting.bind(this);
  }

  startCounting() {
    setInterval(() => {
      this.countUp();
    }, 1000);
  }
  componentDidMount() {
    this.startCounting();
  }
  countUp() {
    this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    this.setState(({ hours }) => ({
      hours: Math.floor(this.state.elapsedTime / (60 * 60))
    }));
    this.setState(({ divisor_for_minutes }) => ({
      divisor_for_minutes: this.state.elapsedTime % (60 * 60)
    }));
    this.setState(({ minutes }) => ({
      minutes: Math.floor(this.state.divisor_for_minutes / 60)
    }));
    this.setState(({ divisor_for_seconds }) => ({
      divisor_for_seconds: this.state.divisor_for_minutes % 60
    }));
    this.setState(({ seconds }) => ({
      seconds: Math.ceil(this.state.divisor_for_seconds)
    }));
  }

  render() {
    return (
      <div>
        <span>
          {this.state.hours} :{this.state.minutes} :{this.state.seconds}
        </span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
