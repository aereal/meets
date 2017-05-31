// @flow

import Meeting from '../models/Meeting';

const calculateScore = (meeting: Meeting): number => {
  const membersCount = meeting.members.length;
  const regionDist = meeting.members.reduce((accum, member) => {
    accum[member.region]++;
    return accum;
  }, {});
  const coefficient = Object.keys(regionDist).length;
  return membersCount * coefficient;
};

const reorderMeetings = (meetings: Meeting[]): Meeting[] => {
  const newMeetings = Array.from(meetings);
  newMeetings.sort((a, b) => calculateScore(b) - calculateScore(a));
  return newMeetings;
};

export default reorderMeetings;
