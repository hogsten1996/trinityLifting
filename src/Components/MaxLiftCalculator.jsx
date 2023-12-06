import React, { useState } from 'react';

const MaxLiftCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [maxLift, setMaxLift] = useState(null);

  const calculateMaxLift = () => {
    const maxLiftValue = weight / (1.0278 - 0.0278 * reps);
    setMaxLift(maxLiftValue.toFixed(2)); // Round to two decimal places
  };

  return (
    <div>
      <h2>Max Lift Calculator</h2>
      <form>
        <label>
          Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={calculateMaxLift}>
          Calculate Max Lift
        </button>
      </form>
      <h3>Note: Above 8 Reps accuracy decreases</h3>
      {maxLift !== null && (
        <p>Your estimated max lift is: {maxLift} lbs</p>
      )}
    </div>
  );
};

export default MaxLiftCalculator;
