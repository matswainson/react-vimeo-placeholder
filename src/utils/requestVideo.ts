import jsonp from 'jsonp';
import { VideoMeta } from '../types';

export const requestVideoMeta: Function = (thumb: string) => {
  return new Promise<VideoMeta>((resolve, reject) => {
    jsonp(thumb, (err: Error, data: VideoMeta[]) => {
      if (data && data.length) {
        resolve(data[0]);
      } else {
        reject(new Error('Request failed'));
      }
    });
  });
};