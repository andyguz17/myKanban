import {
  fetchAssignments,
  postAssignment,
  UpdateStatus,
  DeleteTask,
} from '../redux/actions/index';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Home from './HomeComponent';
import Header from './HeaderComponent';

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAssignments: () => {
    dispatch(fetchAssignments());
  },
  postAssignment: (content) => {
    dispatch(postAssignment(content));
  },
  UpdateStatus: (content, status, itemId) => {
    dispatch(UpdateStatus(content, status, itemId));
  },
  DeleteTask: (itemId) => {
    dispatch(DeleteTask(itemId));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchAssignments();
  }

  render() {
    console.log(this.props.assignments);

    const Board = () => {
      return (
        <Home
          tasks={this.props.assignments.assignments}
          isLoading={this.props.assignments.isLoading}
          error={this.props.assignments.error}
          postNewTask={this.props.postAssignment}
          updateStatus={this.props.UpdateStatus}
          deleteTask={this.props.DeleteTask}
        />
      );
    };

    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
