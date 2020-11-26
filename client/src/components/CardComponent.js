import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const TaskCard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle>Task: </CardTitle>
          <CardText>
            {props.task.content}
            <InputGroup>
              <Input />
              <InputGroupButtonDropdown
                addonType="append"
                isOpen={dropdownOpen}
                toggle={toggleDropDown}
              >
                <DropdownToggle caret>Update</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Move to</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>TODO</DropdownItem>
                  <DropdownItem>DOING</DropdownItem>
                  <DropdownItem>DONE</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
          </CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TaskCard;
