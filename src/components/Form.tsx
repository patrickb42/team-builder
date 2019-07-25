import React, { useState } from 'react';

interface FormProps {
  setRoster: React.Dispatch<React.SetStateAction<RosterTS>>;
}
const Form = ({ setRoster }: FormProps) => {
  const [teamMemberFormData, setTeamMemberFormData] = useState<TeamMemberTS>({
    name: '',
    email: '',
    role: '',
    team: '',
  });
  const { name, email, role, team } = teamMemberFormData;

  const submitMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRoster((roster) => {
      return { ...roster, [team]: [...(roster[team]), teamMemberFormData] };
    });
    setTeamMemberFormData({ name: '', email: '', role: '', team: '' });
  };
  const updateTeamMemberData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamMemberFormData({
      ...teamMemberFormData,
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
        value={role}
        onChange={updateTeamMemberData}
      />&nbsp;
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
