import styled from 'styled-components';

const Canvas = styled.canvas`
  height: ${props => props.height ? props.height : '1200px'};
  width: ${props => props.width ? props.width : '800px'};
  border: 1px solid black;
  cursor: crosshair;
`;

const CanvasImage = styled.img`
  display: none;
`;

export {
  Canvas,
  CanvasImage
};