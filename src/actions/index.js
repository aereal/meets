// @flow

let meetingId = 0;
export const addMeeting = () => {
  debugger;
  return ({
    type: 'ADD_MEETING',
    id: meetingId++,
    members: [],
  });
};
