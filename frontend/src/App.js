import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaintCanvas from 'components/paint-canvas/index';
import DefaultOutlineImage from 'images/crab-outline.png';
import * as Styled from 'components/paint-canvas/styles';

const tropicalFishPalette = [
  '#0D0D0D',
  '#A68B03',
  '#4227F2',
  '#2405F2',
  '#6503A6',
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvasImageRef = React.createRef();
    this.canvas = null;
    this.context = null;
  }

  render() {
    return (
      <div className="App">
        <Styled.CanvasImage ref={this.canvasImageRef} src={DefaultOutlineImage} />
        <PaintCanvas width='1200px' height='600px' canvasImageRef={this.canvasImageRef} availableColors={tropicalFishPalette}/>
      </div>
    );
  }
}

export default App;
