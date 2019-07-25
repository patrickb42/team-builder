import React, { useState } from 'react';

interface FormProps {
  setMembersList: React.Dispatch<React.SetStateAction<TeamMemberTS[]>> | undefined;
}
const Form: React.FC = (props) => {
  const [teamMemberFormData, setTeamMemberFormData] = useState<TeamMemberTS>({
    name: '',
    email: '',
    role: '',
  });
  const { name, email, role } = teamMemberFormData;

  const submitMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
