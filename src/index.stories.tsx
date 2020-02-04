import React, { FunctionComponent} from 'react';
import Vimeo from '.';

export default { title: 'Vimeo' };

const fontStack = 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';

const StyleWrapper: FunctionComponent = (props) => {
  return <div style={{fontFamily: fontStack}}>{props.children}</div>
};

export const player: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo
      id="87008050"
      hoverAnimation="backgroundScale"
      highlightColor="rgba(50,100,150,0.5)"
      borderColor="rgba(150,200,250,0.8)"
      playButtonShape="circle"
    />
  </StyleWrapper>
);

export const hideTitle: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" showTitle={false} />
  </StyleWrapper>
);

export const customHighlightColor: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" highlightColor="red" />
  </StyleWrapper>
);

export const customBorderColor: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" borderColor="blue" />
  </StyleWrapper>
);

export const mini: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" mini={true} />
  </StyleWrapper>
);

export const hoverArrowScale: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" hoverAnimation="arrowScale" />
  </StyleWrapper>
);

export const hoverBackgroundFade: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" hoverAnimation="fade" />
  </StyleWrapper>
);

export const hoverBackgroundScale: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" hoverAnimation="backgroundScale" />
  </StyleWrapper>
);

export const playButtonRounded: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" playButtonShape="circle" />
  </StyleWrapper>
);

export const playButtonRoundedSquare: FunctionComponent = () => (
  <StyleWrapper>
    <Vimeo id="87008050" playButtonShape="rounded-square" />
  </StyleWrapper>
);