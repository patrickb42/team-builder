import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Form from './components/Form';
import Roster from './components/Roster';

const App: React.FC = () => {
  const [roster, setRoster] = useState<RosterTS>({});
  const [memberToEdit, setMemberToEdit] = useState<TeamMemberTS | undefined>();

  return ( 
    <Router>
      <Form setRoster={setRoster} memberToEdit={memberToEdit}/>
      <Roster roster={roster} />
    </Router>
  );
};

export default App;
