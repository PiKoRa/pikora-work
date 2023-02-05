import { useEffect, useState } from 'react';
import { client } from '../contentful';
import '../styles/Contacts.css'
import { ContactUrls } from '../types';

function Contacts() {
  const [contactUrls, setContactUrls] = useState<ContactUrls>({
    twitterUrl: '',
    githubUrl: '',
    nicovideoUrl: ''
  });
  useEffect(() => {
    fetchContentful()
  }, [])
  const fetchContentful = async() => {
    let entries = await client.getEntries()
    entries.items.map((e: any) => {
      if (e.sys.contentType.sys.id === 'contacts') {
        setContactUrls(e.fields)
      }
    })
  }

  return (
    <>
      <h2>- URL -</h2>
      <div className='contact-content'>
        <a href={contactUrls.twitterUrl} className='contact-button contact-twitter-url'>Twitter</a>
        <a href={contactUrls.githubUrl} className='contact-button contact-github-url'>Github</a>
        <a href={contactUrls.nicovideoUrl} className='contact-button contact-nicovideo-url'>ニコニコ</a>
      </div>
    </>
  );
}

export default Contacts;
