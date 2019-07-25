import React from 'react';

import Team from './Team';

interface RosterProps {
  roster: RosterTS;
}
const Roster = ({ roster }: RosterProps) => {
  return (
    <div className="roster">
      {Object.keys(roster).map((teamName) => {
        return (
          <Team team={roster[teamName]} />
        );
      })}
    </div>
  );
}

export default Roster;
