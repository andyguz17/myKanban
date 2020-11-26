import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

//Import Components
import Todo from './TodoComponent';
import Doing from './DoingComponent';
import Done from './DoneComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    if (this.newContent.value.localeCompare('')) {
      this.props.postNewTask(this.newContent.value);
      window.location.reload(false);
    }
    event.preventDefault();
  }

  render() {
    //Filtering Functions
    const todo = this.props.tasks.filter(
      (word) => !word.status.localeCompare('TODO')
    );

    const doing = this.props.tasks.filter(
      (word) => !word.status.localeCompare('DOING')
    );

    const done = this.props.tasks.filter(
      (word) => !word.status.localeCompare('DONE')
    );

    //Home Page
    if (this.props.isLoading) {
      return <div className="container">Loading</div>;
    } else if (this.props.error) {
      return <div className="container">{this.props.error}</div>;
    } else {
      return (
        <div>
          <div className="container">
            <div className="col-12 board-container">
              <div className="d-flex justify-content-around mb-4">
                <Form onSubmit={this.handleLogin} inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                      type="text"
                      id="content"
                      name="content"
                      innerRef={(input) => (this.newContent = input)}
                    />
                  </FormGroup>
                  <Button type="submit" value="submit" color="secondary">
                    Add Work Item
                  </Button>
                </Form>
              </div>
              <div className="d-flex flex-row justify-content-around ">
                <Todo
                  tasks={todo}
                  updateStatus={this.props.updateStatus}
                  deleteTask={this.props.deleteTask}
                />
                <Doing
                  tasks={doing}
                  updateStatus={this.props.updateStatus}
                  deleteTask={this.props.deleteTask}
                />
                <Done tasks={done} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
