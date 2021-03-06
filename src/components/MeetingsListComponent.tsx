// @flow

import * as React from 'react';

import MeetingComponent from './MeetingComponent';
import Meeting from '../models/Meeting';
import Person from '../models/Person';

export interface CallbackProps {
  onAddMember: (meetingId: number, member: Person) => void;
  onFetchMeetings: () => void;
}
interface MeetingsListProps extends CallbackProps {
  meetings: Meeting[];
}

class MeetingsListComponent extends React.PureComponent<MeetingsListProps, {}> {
  componentDidMount() {
    this.props.onFetchMeetings();
  }

  renderPlaceholder() {
    return (
      <div className="card-panel">
        <p>
          右下の
          {" "}
          <button className="btn-floating btn-large red waves-effect waves-light">
            <i className="material-icons">add</i>
          </button>
          {" "}
          を押してMTGを追加します。
        </p>
        <p>
          <button className="btn-floating green">
            <i className="material-icons">reorder</i>
          </button>
          {" "}
          を押すと参加する人が多い順にMTGを並び替えます。<br/>
          場所をまたいでChromeboxを使う必要があるとより上に現れます。
        </p>
      </div>
    );
  };

  render() {
    const { meetings, onAddMember } = this.props;
    return meetings.length === 0 ?
      this.renderPlaceholder() :
      (
        <div>{meetings.map(m => <MeetingComponent key={m.id} meetingId={m.id} members={m.members} onClick={onAddMember} />)}</div>
      );
  }
}

export default MeetingsListComponent;
