import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3003/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee Management</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.Empid}>{employee.Username}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;
