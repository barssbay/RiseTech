import logo from './logo.svg';
import './App.css';
import AddJob from '../src/mainComponents/AddJobComp/AddJob';
import { useState } from 'react';
  import JobsArea from './mainComponents/JobsAreaComp/JobsArea';
function App() {
  const [dataJob,setDataJob] = useState([])

  return (
    <div className="App">
      <div className='logo'>
        <img src={logo}  className="App-Logo" alt="logo" />

      </div>
      
      <AddJob dataJob={dataJob} setDataJob={setDataJob} />

      <JobsArea dataJob={dataJob} setDataJob={setDataJob} />
    </div>
  );
}

export default App;
