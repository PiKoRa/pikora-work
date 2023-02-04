import '../styles/Develops.css'
import { VideoInfo } from '../types';

type Props = {
  data: VideoInfo;
}

function VideoCard(props: Props) {
  let data = props.data;
  return (
    <div className='card-parent'>
      <img src={data.thumbnail} alt={data.title}/>
      <div className='card-description'>
        <h2 className='card-title'>{data.title}</h2>
        <p>{data.description}</p>
        <p className='working-term'>{`投稿日 ${data.postedDate}`}</p>
        <div className='card-button'>
          <a href={data.nicovideoUrl} className={'card-nicovideo-button'}>見る→</a>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

