import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App ">
      
      <svg  className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L1440,160L1440,0L0,0Z"></path>
      </svg>
      
      <img src='./images/logo.png' width="80" className='logo' />
       <Form />
    </div>
  );
}

export default App;
