import React, { FunctionComponent } from 'react';

interface Props {
  highlightColor?: string;
  title: string;
}

const Title: FunctionComponent<Props> = (props) => {
  const {
    highlightColor,
    title
  } = props;
  const color = highlightColor ? highlightColor : "rgba(0,0,0,.6)";
  return <span className="jvid__title" style={{backgroundColor: color}}>
    {title}
  </span>;
}

export default Title;