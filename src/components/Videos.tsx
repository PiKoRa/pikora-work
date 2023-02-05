import { useEffect, useState } from 'react';
import { client } from '../contentful';
import { VideoInfo } from '../types';
import VideoCard from './VideoCard';

const videos: Array<VideoInfo> = []

function Videos() {
  const [videoList, setVideoList] = useState<Array<VideoInfo>>([]);
  useEffect(() => {
    fetchContentful()
  }, [])
  const fetchContentful = async() => {
    let entries = await client.getEntries()
    const vList: Array<VideoInfo> = []
    entries.items.map((e: any) => {
      if (e.sys.contentType.sys.id === 'video') {
        e.fields.thumbnail = `https:${e.fields.thumbnail.fields.file.url}`
        vList.push(e.fields)
      }
    })
    setVideoList(vList)
  }
  return (
    <>
      <h2>- 動画作品集 -</h2>
      <p>音MADなどの動画作品の一覧</p>
      {
        videoList.map((data: VideoInfo) => {
          return <VideoCard data={data}/>
        })
      }
    </>
  );
}

export default Videos;
