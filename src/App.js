import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const [entry, handleEntry] = useState({});

  const passForm = form => {
    console.log('hole');
    handleEntry(form);
  }

  return (
    <div className="App">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="container">
        <div>
          <Form passForm={passForm}/>
        </div>
        <div>
          <Table entry={entry} />
        </div>
      </div>
    </div>
  );
}

export default App;
