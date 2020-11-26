import * as ActionTypes from '../ActionTypes';

//ASSIGNMENTS!!
export const loadAssignment = () => ({
  type: ActionTypes.LOADING_ASSIGNMENTS,
});

export const assignmentFailed = (errmess) => ({
  type: ActionTypes.ASSIGNMENTS_FAILED,
  payload: errmess,
});

export const addAssignments = (assignments) => ({
  type: ActionTypes.ADD_ASSIGNMENTS,
  payload: assignments,
});

export const fetchAssignments = () => (dispatch) => {
  dispatch(loadAssignment(true));

  var targetUrl = 'https://localhost:44344/api/assignment/';
  return fetch(targetUrl)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((repsonse) => repsonse.json())
    .then((assignments) => dispatch(addAssignments(assignments)))
    .catch((error) => dispatch(assignmentFailed(error.message)));
};

//Post operations
export const postAssignment = (content) => (dispatch) => {
  const newContent = {
    content: content,
    status: 'TODO',
  };

  newContent.date = new Date().toISOString();
  console.log(newContent);
  var targetUrl = 'https://localhost:44344/api/assignment/';

  return fetch(targetUrl, {
    method: 'POST',
    body: JSON.stringify(newContent),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .catch((error) => dispatch(assignmentFailed(error.message)));
};

//put
export const UpdateStatus = (content, status, itemId) => (dispatch) => {
  const newContent = {
    content: content,
    status: status,
  };

  newContent.date = new Date().toISOString();
  var targetUrl = 'https://localhost:44344/api/assignment/';

  return fetch(targetUrl + itemId, {
    method: 'PUT',
    body: JSON.stringify(newContent),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .catch((error) => dispatch(assignmentFailed(error.message)));
};

//Delete
export const DeleteTask = (itemId) => (dispatch) => {
  var targetUrl = 'https://localhost:44344/api/assignment/';

  return fetch(targetUrl + itemId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .catch((error) => dispatch(assignmentFailed(error.message)));
};
