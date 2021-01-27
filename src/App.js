import './App.css';
import React from 'react';
import PcLandscape from "./pclandscape";
import PcPortait from "./pcportrait";
import TabletLandscape from './tabletlandscape';
import TabletPortait from './tabletportrait';
import PhoneLandscape from './phonelandscape';
import PhonePortait from './phoneportrait';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width : document.documentElement.clientWidth,
      height : document.documentElement.clientHeight,
    }
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.refresh);
  }

  refresh(){
    this.setState({
      width : document.documentElement.clientWidth,
      height : document.documentElement.clientHeight,
    });
  }

  checkRatio(){
    let big = this.state.width > this.state.height ? this.state.width : this.state.height;
    let small = this.state.width <= this.state.height ? this.state.width : this.state.height;
    return ({ratio: big / small, size: big + small});
  }

  chooseDisplay(ratio, size){
    let toDisplay = null;
    if (ratio < 1.6){
      toDisplay = this.state.width > this.state.height ? <TabletLandscape/> : <TabletPortait/>
    } else if (size >= 1500){
      toDisplay = this.state.width > this.state.height ? <PcLandscape/> : <PcPortait/>
    } else {
      toDisplay = this.state.width > this.state.height ? <PhoneLandscape/> : <PhonePortait/>
    }
    return toDisplay;
  }

  render() {
    let {ratio, size} = this.checkRatio();
    let toDisplay = this.chooseDisplay(ratio, size);
    return (
      <div className="App">
        <h1>{ratio}</h1>
        <h1>{size}</h1>
        {toDisplay}
      </div>
    );
  }
}

export default App;
