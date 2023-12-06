import React from 'react';

const TrainingProgramGenerator = ({ squatMax }) => {
  const generateTrainingProgram = () => {
    if (!squatMax) {
      return [];
    }

    const trainingMax = 0.95 * squatMax; // 95% of the inputed squat max

    // Generate training program
    const program = [
        { week: 1, day: 1, sets: 5, reps: 5, weight: Math.floor(0.75 * trainingMax) },
        { week: 2, day: 1, sets: 5, reps: 5, weight: Math.floor(0.775 * trainingMax) },
        { week: 3, day: 1, sets: 5, reps: 4, weight: Math.floor(0.80 * trainingMax) },
        { week: 4, day: 1, sets: 4, reps: 4, weight: Math.floor(0.825 * trainingMax) },
        { week: 5, day: 1, sets: 4, reps: 3, weight: Math.floor(0.85 * trainingMax) },
        { week: 6, day: 1, sets: 3, reps: 3, weight: Math.floor(0.875 * trainingMax) },
        { week: 7, day: 1, sets: 3, reps: 2, weight: Math.floor(0.90 * trainingMax) },
        { week: 8, day: 1, sets: 2, reps: 2, weight: Math.floor(0.925 * trainingMax) },
        { week: 9, day: 1, sets: 3, reps: 5, weight: Math.floor(0.60 * trainingMax) },
        { week: 10, day: 1, sets: 1, reps: 1, weight: "MAX ATTEMPT" },
      ];

    return program;
  };

  const trainingProgram = generateTrainingProgram();

  return (
    <div>
      {trainingProgram.length > 0 && (
        <div>
          <h3>Squat Training Program</h3>
          <ul>
            {trainingProgram.map((day) => (
              <li key={`week${day.week}_day${day.day}`}>
                W{day.week}/D{day.day}:<br></br> <b>SQUATS</b> Sets: {day.sets} Reps: {day.reps} Weight: {day.weight} lbs
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrainingProgramGenerator;
