import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:8000/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const filteredEmployees = employees.filter(emp => 
    `${emp.first_name} ${emp.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>Team Directory</h1>
        <input 
          type="text" 
          placeholder="Search employees..." 
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="grid">
        {filteredEmployees.map(emp => (
          <div key={emp.id} className="card">
            <div className="avatar">{emp.first_name[0]}{emp.last_name[0]}</div>
            <h3>{emp.first_name} {emp.last_name}</h3>
            <p className="role">{emp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;