// @flow

import * as React from 'react';

type MemberComponentProps = {
  avatarUrl: string,
  name: string,
  region: string,
};

const MemberComponent = ({ avatarUrl, name, region }: MemberComponentProps) => {
  return (
    <img src={avatarUrl} alt={name} className="circle" data-region={region} />
  );
};

export default MemberComponent;
