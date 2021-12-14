/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import employeeData from './employees.json';
import './table.css';

const Table = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [addFormData, setAddFormData] = useState({
    name: '',
    jobTitle: '',
    tenure: '',
    gender: ''
  });
  const [order, setOrder] = useState('ASC');

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      name: addFormData.name,
      jobTitle: addFormData.jobTitle,
      tenure: addFormData.tenure,
      gender: addFormData.gender
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
  };

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...employees].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...employees].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEmployees(sorted);
      setOrder('ASC');
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting('name')}>Name</th>
            <th onClick={() => sorting('jobTitle')}>Job Title</th>
            <th onClick={() => sorting('tenure')}>Tenure</th>
            <th onClick={() => sorting('gender')}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.name}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.tenure}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Employee</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="name" placeholder="Enter a name" onChange={handleAddFormChange} />
        <input
          type="text"
          name="jobTitle"
          placeholder="Enter a Job Title"
          onChange={handleAddFormChange}
        />
        <input type="value" name="tenure" placeholder="Tenure" onChange={handleAddFormChange} />
        <input
          type="text"
          name="gender"
          placeholder="Enter a gender"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add Emplpoyee</button>
      </form>
    </div>
  );
};

export default Table;
