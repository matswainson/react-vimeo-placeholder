import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
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
}

const PlayButton: FunctionComponent<Props> = (props) => {
  const {
    borderColor,
    highlightColor,
    play,
    playButtonArrow,
    playButtonShape
  } = props;
  const playButtonClass = classnames(
    'jvid__play',
    { 'jvid__play--dark': playButtonArrow && playButtonArrow === 'dark' },
    { 'jvid__play--circle': playButtonShape && playButtonShape === 'circle' },
    { 'jvid__play--rounded-square': playButtonShape && playButtonShape === 'rounded-square' }
  );
  return <button
    className={playButtonClass}
    onClick={play}
    style={{
      backgroundColor: highlightColor,
      borderColor: borderColor
    }}
  />;
}

export default PlayButton;