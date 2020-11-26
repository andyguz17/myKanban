import React from 'react';
import { Jumbotron } from 'reactstrap';

function Header() {
  return (
    <React.Fragment>
      <Jumbotron>
        <div className="container">
          <div className="row ">
            <div className="col-12 header">
              <h1>My Kan Ban</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;
