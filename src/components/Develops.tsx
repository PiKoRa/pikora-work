import '../styles/Develops.css'
import Card from './Card';
import { WorkInfo } from '../types';

const workList: Array<WorkInfo> = [];

function Develops() {
  return (
    <>
      <h2>- 開発作品集 -</h2>
      <p className='develops-description'>これまで開発してきたもののコードや制作過程動画などの一覧</p>
      {
        workList.map((data: WorkInfo) => {
          return <Card data={data}/>
        })
      }
    </>
  );
}

export default Develops;
