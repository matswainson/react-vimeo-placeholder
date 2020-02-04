import React, { FunctionComponent } from 'react';
import Background from '../Background';
import Fade from '../Fade';
import PlayButton from '../PlayButton';
import Title from '../Title';
import {
  PlayButtonArrow,
  PlayButtonShape
} from '../../types';

interface Props {
  borderColor: string;
  highlightColor: string;
  play: () => void;
  playButtonArrow?: PlayButtonArrow;
  playButtonShape?: PlayButtonShape;
  showTitle?: boolean;
  thumbnail: string;
  title: string;
  videoFade: boolean;
}

const Poster: FunctionComponent<Props> = (props) => {
  const {
    borderColor,
    highlightColor,
    play,
    playButtonArrow,
    playButtonShape,
    showTitle,
    thumbnail,
    title,
    videoFade
  } = props;
  const posterClass = `jvid__poster${videoFade?" jvid__poster--fade":""}`;
  return (
    <div className={posterClass}>
      <Background thumbnail={thumbnail} />
      <Fade />
      <PlayButton
        borderColor={borderColor}
        highlightColor={highlightColor}
        play={play}
        playButtonArrow={playButtonArrow}
        playButtonShape={playButtonShape}
      />
      {showTitle && <Title highlightColor={highlightColor} title={title} />}
  </div>
  );
}

export default Poster;