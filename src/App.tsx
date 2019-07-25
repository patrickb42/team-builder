import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Form from './components/Form';

const App: React.FC = () => {
  const [membersList, setMembersList] = useState<TeamMemberTS[]>([]);

  return (
    <Router>
      <Form setMembersList={setMembersList}/>
    </Router>
  );
};

export default App;
