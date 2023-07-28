import './App.css';
import GetData from './components/GetData';
import './components/Weather.scss'

function App() {
  return (
    <div className="App">
      <h1 className='mt-4 main_heading'>Enterrr a city name</h1>
      <GetData />
    </div>
  );
}

export default App;
