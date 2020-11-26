import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

function RenderMyTask(props) {
  var newContent = 'DOING';

  function handleLogin() {
    props.updateTask(
      props.task.content,
      newContent.value,
      props.task.assignmentId
    );
  }

  var date = new Date(props.task.date);

  return (
    <div className="card_container">
      <h6>{date.toDateString()}</h6>
      {props.task.content}
      <br />
      <div className="d-flex">
        <Form onSubmit={handleLogin} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              innerRef={(input) => (newContent = input)}
            >
              <option>DOING</option>
              <option>DONE</option>
            </Input>
          </FormGroup>
          <Button type="submit" value="submit" color="secondary">
            Update
          </Button>
        </Form>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.deleteTask(props.task.assignmentId);
            window.location.reload(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

class Todo extends Component {
  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <div key={task.assignmentId} className="col-12 mb-2">
          <RenderMyTask
            task={task}
            updateTask={this.props.updateStatus}
            deleteTask={this.props.deleteTask}
          />
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

export default Todo;
