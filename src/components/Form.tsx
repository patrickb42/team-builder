import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const submitMember = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};


interface FormProps {
  membersList: TeamMemberTS[] | undefined;
  setMembersList: React.Dispatch<React.SetStateAction<TeamMemberTS[]>> | undefined;
}
const Form: React.FC = () => {
  const [teamMemberFormData, setTeamMemberFormData] = useState<TeamMemberTS | undefined>(undefined);

  const updateTeamMemberData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamMemberFormData({
      ...teamMemberFormData,
      [e.currentTarget.name]: e.currentTarget.value
    } as TeamMemberTS);
  };

  return (
    <form onSubmit={submitMember}>
      Name:&nbsp;
      <input
        name="name"
        type="text"
        placeholder="Taylor Smith"
        onChange={updateTeamMemberData}
        /><br/>
      Email:&nbsp;
      <input
        name="email"
        type="text"
        placeholder="TaylorSmith@gmail.com"
        onChange={updateTeamMemberData}
        /><br/>
      Role:&nbsp;
      <input name="role"
        type="text"
        placeholder="Software Developer"
        onChange={updateTeamMemberData}
      /><br/>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
