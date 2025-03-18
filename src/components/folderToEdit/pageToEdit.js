import React from "react";

const PageToEdit = () => (
  <div>
    <h1>This is main page</h1>
    <p>Here you should add your content</p>
    <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents">
      For better understanding is highly recommended to check this course out
    </a>
    <div>
      <h2>Your tasks</h2>
      <ul>
        <li>Fetch data</li>
        <li>Add form to save data</li>
        <li>
          Add form to update data (you can use the same as for saving data)
        </li>
        <li>Delete data</li>
      </ul>
    </div>
  </div>
);

export default PageToEdit;
