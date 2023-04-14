import { useState } from "react";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <h1 className="title">Find your dream job</h1>

      <div className="input-container">
        <input
          type="email"
          placeholder="Type Your Email"
          className="email-input"
        />
        <button type="submit" className="submit-button">
          search
        </button>
      </div>

      <div className="find-jobs-container">
        <div className="preference">
          <input type="checkbox" name="" id="" /> Full time
          <h2>LOCATION</h2>
          <input
            type="text"
            className="location-input"
            name=""
            id=""
            placeholder="city,country"
          />
          <div className="places">
            <div>
              <input type="radio" name="" id="" /> <span>London</span>
            </div>
            <div>
              <input type="radio" name="" id="" /> New York
            </div>
            <div>
              <input type="radio" name="" id="" /> San Francisco
            </div>
            <div>
              <input type="radio" name="" id="" /> Nigeria
            </div>
          </div>
        </div>
        <div className="job-posts">
          <div className="job-card">
            <h2>Front end software developer</h2>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
