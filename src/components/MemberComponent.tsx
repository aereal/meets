// @flow

import * as React from 'react';

type MemberComponentProps = {
  avatarUrl: string,
  name: string,
  location: string,
};

const MemberComponent = ({ avatarUrl, name, location }: MemberComponentProps) => {
  return (
    <img src={avatarUrl} alt={name} className="circle" data-location={location} />
  );
};

export default MemberComponent;
