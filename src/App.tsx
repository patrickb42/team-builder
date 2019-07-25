import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Form from './components/Form';

const App: React.FC = () => {
  const [membersList, setMembersList] = useState<TeamMemberTS[]>([]);
  // const [roster, setRoster] = useState<Roster>({});

  return (
    <Router>
      <Form setMembersList={setMembersList}/>
      {/* <Form setMembersList={setRoster}/> */}
    </Router>
  );
};

export default App;
