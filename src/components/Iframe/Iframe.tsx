import React, { FunctionComponent } from 'react';

interface Props {
  showVideo: boolean;
  src: string;
  title: string;
}

const Iframe: FunctionComponent<Props> = (props) => {
  const {
    showVideo,
    src,
  title } = props;
  return (
    <>
      <iframe
        src={src}
        allowFullScreen
        style={{display: showVideo ? "block" : "none"}}
        title={title}>
      </iframe>
    </>
  );
}

export default Iframe;