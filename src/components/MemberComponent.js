// @flow

import React from 'react';
import ReactDOM from 'react-dom';

type MemberComponentProps = {
  avatarUrl: string,
  name: string,
};

const MemberComponent = ({ avatarUrl, name }: MemberComponentProps) => {
  return (
    <img src={avatarUrl} alt={name} className="circle" />
  );
};

export default MemberComponent;
