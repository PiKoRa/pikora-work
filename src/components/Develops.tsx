import '../styles/Develops.css'
import Card from './Card';
import { WorkInfo } from '../types';
import { useEffect, useState } from 'react';
import { client } from '../contentful';

function Develops() {
  const [workList, setWorkList] = useState<Array<WorkInfo>>([]);
  useEffect(() => {
    fetchContentful()
  }, [])
  const fetchContentful = async() => {
    let entries = await client.getEntries()
    const wList: Array<WorkInfo> = []
    entries.items.map((e: any) => {
      if (e.sys.contentType.sys.id === 'work') {
        e.fields.thumbnail = `https:${e.fields.thumbnail.fields.file.url}`
        wList.push(e.fields)
      }
    })
    setWorkList(wList)
  }

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
