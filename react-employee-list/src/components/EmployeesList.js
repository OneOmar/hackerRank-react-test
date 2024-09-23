import React, { useState } from 'react';

const EmployeesList = ({ employees }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          className="filter-input"
          data-testid="filter-input"
          value={filter}
          onChange={handleChange}
        />
      </div>
      <ul className="employees-list">
        {filteredEmployees.map(employee => (
          <li key={employee.name} data-testid="employee">{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;
