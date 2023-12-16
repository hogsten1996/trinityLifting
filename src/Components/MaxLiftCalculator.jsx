import React, { useState } from 'react';

const MaxLiftCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [maxLift, setMaxLift] = useState(null);

  const calculateMaxLift = () => {
    const maxLiftValue = weight / (1.0278 - 0.0278 * reps);
    const roundedMaxLift = Math.round(maxLiftValue / 5) * 5; // Round to nearest 5
    setMaxLift(roundedMaxLift);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Max Lift Calculator</h2>
      <form>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Reps:
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <button
          type="button"
          onClick={calculateMaxLift}
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Calculate Max Lift
        </button>
      </form>
      <h3 className="mt-4 text-sm text-gray-500">Note: Above 8 Reps accuracy decreases</h3>
      {maxLift !== null && (
        <p className="mt-4 text-lg text-green-600">Your estimated max lift is: {maxLift} lbs</p>
      )}
    </div>
  );
};

export default MaxLiftCalculator;

