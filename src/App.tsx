import Header from './components/Header';
import Develops from './components/Develops';
import Videos from './components/Videos';
import Contacts from './components/Contacts';
import About from './components/About';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <div className='content'>
        <About/>
        <Develops/>
        <Videos/>
        <Contacts/>
      </div>
    </>
  );
}

export default App;
