import { VideoInfo } from '../types';
import VideoCard from './VideoCard';

const videos: Array<VideoInfo> = []

function Videos() {
  return (
    <>
      <h2>- 動画作品集 -</h2>
      <p>音MADなどの動画作品の一覧</p>
      {
        videos.map((data: VideoInfo) => {
          return <VideoCard data={data}/>
        })
      }
    </>
  );
}

export default Videos;
