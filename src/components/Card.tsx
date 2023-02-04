import '../styles/Develops.css'
import { WorkInfo } from '../types';

const WorkingState = [
  '制作中',
  '完成',
  '失踪'
]

type Props = {
  data: WorkInfo;
}

function Card(props: Props) {
  let data = props.data;
  let workIsExist = data.workUrl !== undefined;
  let githubIsExist = data.githubUrl !== undefined;
  let nicoIsExist = data.nicovideoUrl !== undefined;
  let workingTermIsOneDay = data.startDate === data.endDate;
  return (
    <div className='card-parent'>
      <img src={data.thumbnail} alt={data.title}/>
      <div className='card-description'>
        <p className={`working-state state${data.workingState}`}>{WorkingState[data.workingState]}</p>
        <h2 className='card-title'>{data.title}</h2>
        <p>{data.description}</p>
        <p className='working-term'>製作期間 {data.startDate + (workingTermIsOneDay?'':('～'+(data.endDate === undefined?'':data.endDate)))}</p>
        <div className='card-button'>
          <a href={data.workUrl} className={workIsExist?'card-work-button':'card-work-button inactive'}>Work</a>
          <a href={data.githubUrl} className={githubIsExist?'card-github-button':'card-github-button inactive'}>SourceCode</a>
          <a href={data.nicovideoUrl} className={nicoIsExist?'card-nicovideo-button':'card-nicovideo-button inactive'}>PlayList</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
