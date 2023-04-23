import React, { useState } from 'react';

function App() {
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    setIsCreateAccount(true);
  };

  const handleLogin = () => {
    setIsCreateAccount(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h1>Welcome to Mobile View</h1>
      {isCreateAccount ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Create Account</button>
          <button onClick={handleLogin}>Log In</button>
        </form>
      ) : (
        <div>
          <button onClick={handleCreateAccount}>Create Account</button>
          <button>Log In</button>
        </div>
      )}
    </div>
  );
}

export default App;
