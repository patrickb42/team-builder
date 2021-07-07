import React from 'react';

interface TeamProps {
  team: TeamMemberTS[];
}
const Team = ({ team }: TeamProps) => {
  return (
    <div className="team">
      <h1>{team[0] && team[0].team}</h1>
      {team.map((teamMember) => {
        return (
          <div className="team-member">
            <h2>{teamMember.name}</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
