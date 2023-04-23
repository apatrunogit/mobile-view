import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [screenshotUrl, setScreenshotUrl] = useState('');

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

  const handleScreenshot = () => {
    html2canvas(document.body).then(function(canvas) {
      setScreenshotUrl(canvas.toDataURL());
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <h1>Welcome to My App</h1>
      <div className="form-container">
        <button className="btn" onClick={handleCreateAccount}>Create Account</button>
        <button className="btn" onClick={handleLogin}>Login</button>
        <form className="form-input" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="screenshot-container">
        {screenshotUrl && <img className="screenshot" src={screenshotUrl} alt="Screenshot" />}
      </div>
      <button className="screenshot-btn" onClick={handleScreenshot}>Take Screenshot</button>
    </div>
  );
}

export default App;
