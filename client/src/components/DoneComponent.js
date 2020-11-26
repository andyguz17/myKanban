import React, { Component } from 'react';

function RenderMyTask(props) {
  var date = new Date(props.task.date);

  return (
    <div className="card_container">
      <h6>{date.toDateString()}</h6>
      {props.task.content}
    </div>
  );
}

class Done extends Component {
  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <div key={task.assignmentId} className="col-12 mb-2">
          <RenderMyTask task={task} />
        </div>
      );
    });
    return (
      <div className="task_container">
        <h5>TODO:</h5>
        {tasks}
      </div>
    );
  }
}

export default Done;
