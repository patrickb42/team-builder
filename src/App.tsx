import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const [placeholdState, setPlaceholderState] = useState<TeamMemberTS[]>();

  return (
    <Router>
      {/* <Navigation /> */}
      <h1>test</h1>
    </Router>
  );
};

export default App;
