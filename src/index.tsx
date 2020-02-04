import React, { FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';
import Iframe from './components/Iframe';
import Poster from './components/Poster';
import { requestVideoMeta } from './utils/requestVideo';
import {
  HoverAnimation,
  PlayButtonArrow,
  PlayButtonShape,
  VideoMeta
} from './types';
import './style.css';

interface Props {
  borderColor?: string;
  hoverAnimation?: HoverAnimation;
  highlightColor?: string;
  id: string;
  mini?: boolean;
  playButtonArrow?: PlayButtonArrow;
  playButtonShape?: PlayButtonShape;
  showTitle?: boolean;
}

const Vimeo: FunctionComponent<Props> = (props) => {

  const {
    hoverAnimation,
    id,
    mini,
    playButtonArrow,
    playButtonShape
  } = props;
  let {
    borderColor,
    highlightColor,
    showTitle
  } = props;

  const [showVideo, setVideoVisibility] = useState<boolean>(false);
  const [videoFade, setVideoFade] = useState<boolean>(false);
  const [src, setSrc] = useState<string>(`//player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const jvidClass = classnames(
          'jvid',
          { 'jvid--fade': hoverAnimation && hoverAnimation === 'fade'},
          { 'jvid--arrow-scale': hoverAnimation && hoverAnimation === 'arrowScale'},
          { 'jvid--background-scale': hoverAnimation && hoverAnimation === 'backgroundScale'},
          { 'jvid--mini': mini }
        ),
        play = (): void => {
          setSrc(src + '&autoplay=1&muted=1');
          setTimeout(setVideoFade, 100, true);
          setTimeout(setVideoVisibility, 500, true);
        },
        vimeoApi = `http://vimeo.com/api/v2/video/${id}.json?callback=showThumb`;

  borderColor = borderColor || "none";
  highlightColor = highlightColor || "rgba(0,0,0,.6)";
  showTitle = typeof showTitle !== "undefined" ? showTitle : true;

  useEffect(() => {
    requestVideoMeta(vimeoApi).then((res: VideoMeta) => {
      setThumbnail(res.thumbnail_large);
      setTitle(res.title);
    });
  }, [vimeoApi]);

  if (!thumbnail) {
    return null;
  }

  return (
    <div className={jvidClass}>
			<Iframe
        showVideo={showVideo}
        src={src}
        title={title}
      />
      {!showVideo && <Poster 
        borderColor={borderColor}
        highlightColor={highlightColor}
        play={play}
        playButtonArrow={playButtonArrow}
        playButtonShape={playButtonShape}
        showTitle={showTitle}
        thumbnail={thumbnail}
        title={title}
        videoFade={videoFade}
      />}
    </div>
  );
};

export default Vimeo;