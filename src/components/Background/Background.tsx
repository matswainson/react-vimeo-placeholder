import React, { FunctionComponent } from 'react';

interface Props {
  thumbnail: string;
}

const Background: FunctionComponent<Props> = (props) => {
  const {
    thumbnail
  } = props;
  return <div
    className="jvid__background"
    style={{backgroundImage: `url(${thumbnail})`}}
  />;
}

export default Background;