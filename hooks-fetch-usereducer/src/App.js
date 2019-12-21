import React from 'react';
import './App.css';
import DataFetch from './components/DataFetching';
import ReducerFetch from './components/ReducerFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <DataFetch/> */}
       <ReducerFetch/>
      </header>
    </div>
  );
}

export default App;
