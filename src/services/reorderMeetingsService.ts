// @flow

import Meeting from '../models/Meeting';

type Accum = { [key: string]: number }
const calculateScore = (meeting: Meeting): number => {
  const membersCount = meeting.members.length;
  const locationDist = meeting.members.reduce<Accum>((accum, member) => {
    accum[member.location]++;
    return accum;
  }, {});
  const coefficient = Object.keys(locationDist).length;
  return membersCount * coefficient;
};

const reorderMeetings = (meetings: Meeting[]): Meeting[] => {
  const newMeetings = meetings.slice();
  newMeetings.sort((a, b) => calculateScore(b) - calculateScore(a));
  return newMeetings;
};

export default reorderMeetings;
