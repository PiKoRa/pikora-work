import '../styles/Contacts.css'

const contactUrl = {
  twitter: '',
  github: '',
  nicovideo: ''
}

function Contacts() {
  return (
    <>
      <h2>- URL -</h2>
      <div className='contact-content'>
        <a href={contactUrl.twitter} className='contact-button contact-twitter-url'>Twitter</a>
        <a href={contactUrl.github} className='contact-button contact-github-url'>Github</a>
        <a href={contactUrl.nicovideo} className='contact-button contact-nicovideo-url'>ニコニコ</a>
      </div>
    </>
  );
}

export default Contacts;
