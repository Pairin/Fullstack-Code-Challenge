import React from 'react';
import styled from 'styled-components';
import * as Styled from 'components/paint-canvas/styles';

const CurrentColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
`;

class PaintCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.currentColorRef = React.createRef();
    this.canvas = null;
    this.context = null;
    this.mouse = {x: null, y: null};
    this.pixelData = null;
  }

  state = {
    currentColor: null
  }

  componentDidMount () {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    const canvasWidth = `${this.props.width}`.replace('px', '');
    const canvasHeight = `${this.props.height}`.replace('px', '');
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.props.canvasImageRef.current.onload = this.drawImage;

    this.props.availableColors.map(this.drawColorPaletteChoice)

    this.addClickListeners();
  }

  drawColorPaletteChoice = (color, i) => {
    this.context.fillStyle = color;
    this.context.fillRect(this.canvas.width - 30, (30 * i) + 20, 20, 20)
  }

  addClickListeners = () => {
    this.canvas.addEventListener('mousedown', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      const imgData = this.context.getImageData(this.mouse.x, this.mouse.y, 1, 1);
      this.currentColor = `rgb(${imgData.data.join(',')})`;
      this.currentColorRef.current.style.backgroundColor = this.currentColor;
    });
  }

  drawImage = ({target}) => {
		this.context.drawImage(target, 0, 0, this.canvas.width/2, this.canvas.width/2);
  }

  render() {
    return (
      <div>
        <Styled.Canvas ref={this.canvasRef} width={this.props.width} height={this.props.height}></Styled.Canvas>
        <div>
          <h1>Canvas</h1>
          <CurrentColor color={this.state.currentColor} ref={this.currentColorRef}>

          </CurrentColor>
        </div>
      </div>
    );
  }
}

export default PaintCanvas;