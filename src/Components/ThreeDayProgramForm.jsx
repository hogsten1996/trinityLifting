import React, { useState } from "react";
import ThreeDayProgram from "./ThreeDayProgram";
import { Link } from "react-router-dom";

const ThreeDayProgramForm = () => {
  const [squatMax, setSquatMax] = useState("");
  const [benchMax, setBenchMax] = useState("");
  const [deadliftMax, setDeadliftMax] = useState("");
  const [overheadPressMax, setOverheadPressMax] = useState("");
  const [squatStickingPoint, setSquatStickingPoint] = useState("");
  const [benchStickingPoint, setBenchStickingPoint] = useState("");
  const [deadliftStickingPoint, setDeadliftStickingPoint] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto mb-12 min-h-screen">
      <h2 className="text-3xl font-bold my-3 text-center">
        Three Day Program Generator
      </h2>
      <p className="text-center my-3">
        Don't Know your max lifts?{" "}
        <Link to="/maxliftcalc">
          <b className="underline hover:text-blue-600 cursor-pointer">
            CLICK HERE
          </b>
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 md:w-[30%] mx-auto">
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">Squat Max (lbs):</label>
          <input
            type="number"
            value={squatMax}
            onChange={(e) => setSquatMax(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">Bench Max (lbs):</label>
          <input
            type="number"
            value={benchMax}
            onChange={(e) => setBenchMax(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">Deadlift Max (lbs):</label>
          <input
            type="number"
            value={deadliftMax}
            onChange={(e) => setDeadliftMax(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">
            Overhead Press Max (lbs):
          </label>
          <input
            type="number"
            value={overheadPressMax}
            onChange={(e) => setOverheadPressMax(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <h1 className="text-lg font-bold mb-2">
          Weak Points / Sticking Points
        </h1>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">
            Squat Sticking Point:
          </label>
          <select
            value={squatStickingPoint}
            onChange={(e) => setSquatStickingPoint(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/3 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">
            Bench Sticking Point:
          </label>
          <select
            value={benchStickingPoint}
            onChange={(e) => setBenchStickingPoint(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/3 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-1">
            Deadlift Sticking Point:
          </label>
          <select
            value={deadliftStickingPoint}
            onChange={(e) => setDeadliftStickingPoint(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          >
            <option value="">Select Sticking Point</option>
            <option value="bottom-third">Bottom 1/3</option>
            <option value="middle-half-up">Middle 1/3 Up</option>
            <option value="top-third">Top 1/3</option>
            <option value="no-specific-weakpoint">No Specific Weakpoint</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      {formSubmitted && (
        <ThreeDayProgram
          squatMax={squatMax}
          benchMax={benchMax}
          deadliftMax={deadliftMax}
          overheadPressMax={overheadPressMax}
          squatStickingPoint={squatStickingPoint}
          benchStickingPoint={benchStickingPoint}
          deadliftStickingPoint={deadliftStickingPoint}
        />
      )}
    </div>
  );
};

export default ThreeDayProgramForm;
