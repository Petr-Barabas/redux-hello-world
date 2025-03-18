import React from "react";

const PageToEdit = () => (
  <div>
    <h1>This is main page</h1>
    <p>Here you should add your content</p>
    <div>
      <h2>Learning resources:</h2>
      <ul>
        <li>
          <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents">
            Step-by-Step tutorial for Redux
          </a>
        </li>
        <li>
          <a href="https://final-form.org/react">
            React Final Form to create forms
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2>Your tasks is to extend this app and add tab for Todo list</h2>
      <ul>
        <li>Fetch all tasks</li>
        <li>Add form to save tasks</li>
        <li>
          Add form to update tasks (you can use the same as for saving data)
        </li>
        <li>Delete tasks</li>
        <li>
          <b>Optional:</b> Fetch and display all tasks together with their
          categories
        </li>
      </ul>
    </div>
  </div>
);

export default PageToEdit;
