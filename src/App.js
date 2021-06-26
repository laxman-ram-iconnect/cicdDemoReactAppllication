import './App.css';
import { useState } from 'react';

function App() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ mobile, setMobile ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ records, setRecords ] = useState([]);

  function addRecords() {
    if(firstName && lastName && mobile && email) {
      setRecords([
        ...records,
        { firstName, lastName, mobile, email }
      ]);
      setFirstName("")
      setLastName("")
      setMobile("")
      setEmail("")
    }
  }
  return (
    <div className="main-page">
      <header className="header" >CI /  CD Pipeline Demo</header>
      <div className="form">
        <div>
          <label for="first-name">First Name</label>
          <input id="first-name" onChange={event => setFirstName(event.target.value)} value={firstName}/>
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input id="last-name" onChange={event => setLastName(event.target.value)} value={lastName}/>
        </div>
        <div>
          <label for="mobile">Mobile</label>
          <input id="mobile" onChange={event => setMobile(event.target.value)} value={mobile} />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" onChange={event => setEmail(event.target.value)} value={email}/>
        </div>
        <button onClick={addRecords}>
          Submit
        </button>
      </div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
        {records.map((record) => 
          <tr>
          <td>{record.firstName}</td>
          <td>{record.lastName}</td>
          <td>{record.mobile}</td>
          <td>{record.email}</td>
        </tr>
        )}
        
      </table>
    </div>
  );
}

export default App;
