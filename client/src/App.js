// import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
// import LogIn from './components/Auth/LogIn'
import Dashboard from './components/Dashboard';
import {Routes, Route} from'react-router-dom';
import Pages from './components/Pages';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, [])

  if (!user) return <Pages onLogin={setUser} />

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
