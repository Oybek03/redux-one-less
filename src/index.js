import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
// Functional component

// const App = ()=>{
//   return <div>Hello World</div>
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        {
          this.setState({
            latitude: position.coords.latitude,
          });
        }
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  getLocation() {
    if (this.state.latitude) {
      return <div>Latitude:{this.state.latitude}</div>;
    } else if (this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>;
    } else if (this.state.latitude && this.state.errorMessage) {
      return <div>loading...</div>;
    }
  }
  render() {
    return (
      <DisplaySeason lat={this.state.latitude} err={this.state.errorMessage} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
