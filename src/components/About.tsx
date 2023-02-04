import '../styles/About.css'

function About() {
  return (
    <>
      <h2>- About -</h2>
      
      <div className='about-box'>
        <div className='about-image'>
          <img src="https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/12555/125551772.jpg" alt='PiKoRa Icon'/>
        </div>
        <div className='about-description'>
          <h3>PiKoRa</h3>
          <p>
            動画投稿者。プログラミングのボイスロイド実況や、音MADの動画を主に投稿している。2022年8月から投稿開始。
          </p>
          <p>
            好きなプログラミング言語はPythonとKotlin。
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
