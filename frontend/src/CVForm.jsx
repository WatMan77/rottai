import React, { useState } from 'react';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';

function CVForm() {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>CV Information</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <br />
        <label>
          Experience:
          <Experience />
        </label>
        <br />
        <label>Skills:</label>

          <Skills style={{ marginBottom: '30px' }} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CVForm;