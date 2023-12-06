import React, { useState } from 'react';
import TrainingProgramGenerator from './TrainingProgramGenerator';

const ProgramRequestForm = () => {
  const [squatMax, setSquatMax] = useState('');
  const [benchMax, setBenchMax] = useState('');
  const [deadliftMax, setDeadliftMax] = useState('');
  const [squatStickingPoint, setSquatStickingPoint] = useState('');
  const [benchStickingPoint, setBenchStickingPoint] = useState('');
  const [deadliftStickingPoint, setDeadliftStickingPoint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>Program Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Squat Max (lbs):
          <input
            type="number"
            value={squatMax}
            onChange={(e) => setSquatMax(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bench Max (lbs):
          <input
            type="number"
            value={benchMax}
            onChange={(e) => setBenchMax(e.target.value)}
          />
        </label>
        <br />
        <label>
          Deadlift Max (lbs):
          <input
            type="number"
            value={deadliftMax}
            onChange={(e) => setDeadliftMax(e.target.value)}
          />
        </label>
        <br />
        <label>
          Squat Sticking Point:
          <select
            value={squatStickingPoint}
            onChange={(e) => setSquatStickingPoint(e.target.value)}
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/2 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </label>
        <br />
        <label>
          Bench Sticking Point:
          <select
            value={benchStickingPoint}
            onChange={(e) => setBenchStickingPoint(e.target.value)}
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/2 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </label>
        <br />
        <label>
          Deadlift Sticking Point:
          <select
            value={deadliftStickingPoint}
            onChange={(e) => setDeadliftStickingPoint(e.target.value)}
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/2 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <TrainingProgramGenerator squatMax={squatMax} />
    </div>
  );
};

export default ProgramRequestForm;

