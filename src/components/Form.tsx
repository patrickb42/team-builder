import React, { useState } from 'react';

interface FormProps {
  // setRoster: React.Dispatch<React.SetStateAction<RosterTS>>;
  setRoster: any;
}
const Form = ({ setRoster }: FormProps) => {
  const [teamMember, setTeamMember] = useState<TeamMemberTS>({
    name: '',
    email: '',
    role: '',
    team: '',
  });
  const { name, email, role, team } = teamMember;

  const submitMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRoster((roster: any) => {
      const currentTeam = roster[team] || [];
      const updatedTeam = [...currentTeam, teamMember];
      return { ...roster, [team]: updatedTeam };
    });
    setTeamMember({ name: '', email: '', role: '', team: '' });
  };
  const updateTeamMemberData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamMember({
      ...teamMember,
      [e.currentTarget.name]: e.currentTarget.value,
    } as TeamMemberTS);
  };

  return (
    <form onSubmit={submitMember}>
      Name:&nbsp;
      <input
        name="name"
        type="text"
        placeholder="Taylor Smith"
        value={name}
        onChange={updateTeamMemberData}
      />&nbsp;
      Email:&nbsp;
      <input
        name="email"
        type="email"
        placeholder="TaylorSmith@gmail.com"
        value={email}
        onChange={updateTeamMemberData}
      />&nbsp;
      Role:&nbsp;
      <input name="role"
        type="text"
        placeholder="Software Developer"
        value={role}
        onChange={updateTeamMemberData}
      />&nbsp;
      Team:&nbsp;
      <input name="team"
        type="text"
        placeholder="Jacob"
        value={team}
        onChange={updateTeamMemberData}
      />&nbsp;
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
