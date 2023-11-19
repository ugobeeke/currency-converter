import React, {useEffect} from 'react';
import './App.css';
import inputRow from './inputRow';

const BASE_URL = 'https://api.frankfurter.app/latest'

function App() {

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(date => console.log(data))

  }, [])
  return (
    <>
    <h1> Convert Currency</h1>
    <inputRow />
    <div className='equals'> = </div>
    <inputRow />
    </>

  );
}

export default App;
