const generateThreeDayProgram = (
  squatMax,
  benchMax,
  deadliftMax,
  overheadPressMax,
  squatStickingPoint,
  benchStickingPoint,
  deadliftStickingPoint
) => {

  const squatStickingPointExercises = {
    "bottom-third": "Paused Squat",
    "middle-half-up": "Pin Squat",
    "top-third": "Front Squat",
    "no-specific-weakpoint": "Paused Squat",
  };

  const benchStickingPointExercises = {
    "bottom-third": "Spoto Press",
    "middle-half-up": "Close Grip Bench",
    "top-third": "Block Press",
    "no-specific-weakpoint": "Close Grip Bench",
  };

  const deadliftStickingPointExercises = {
    "bottom-third": "Deficit Deadlift",
    "middle-half-up": "Paused Deadlift",
    "top-third": "Rack/Block Pulls",
    "no-specific-weakpoint": "Paused Deadlift",
  };

  // Generate training program
  const program = [
    {
      week: "1",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 5,
          reps: 5,
          weight: Math.floor(0.8 * squatMax) + " lbs",
          excercise2: squatStickingPointExercises[squatStickingPoint],
          sets2: 3,
          reps2:
            squatStickingPoint === "bottom-third"
              ? 3
              : squatStickingPoint === "middle-half-up"
              ? 3
              : squatStickingPoint === "top-third"
              ? 6
              : 3,
          weight2:
            squatStickingPoint === "bottom-third"
              ? Math.floor(0.75 * squatMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.825 * squatMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.575 * squatMax) + " lbs"
              : Math.floor(0.75 * squatMax) + " lbs",
          excercise3: "Bench",
          sets3: 5,
          reps3: 5,
          weight3: Math.floor(0.8 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "2",
          excercise: "Overhead Press",
          sets: 5,
          reps: 5,
          weight: Math.floor(0.8 * overheadPressMax) + " lbs",
          excercise2: "Deadlift",
          sets2: 1,
          reps2: 6,
          weight2: Math.floor(0.85 * deadliftMax) + " lbs",
          excercise3: deadliftStickingPointExercises[deadliftStickingPoint],
          sets3: 3,
          reps3: 3,
          weight3:
            deadliftStickingPoint === "bottom-third"
              ? Math.floor(0.75 * deadliftMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.75 * deadliftMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.9 * deadliftMax) + " lbs"
              : Math.floor(0.75 * deadliftMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "3",
          excercise: "Squat",
          sets: 3,
          reps: 6,
          weight: Math.floor(0.725 * squatMax) + " lbs",
          excercise2: "Bench",
          sets3: 3,
          reps3: 6,
          weight2: Math.floor(0.725 * benchMax) + " lbs",
          excercise3: benchStickingPointExercises[benchStickingPoint],
          sets2: 5,
          reps2: 3,
          weight3:
            benchStickingPoint === "bottom-third"
              ? Math.floor(0.8 * benchMax) + " lbs"
              : benchStickingPoint === "middle-half-up"
              ? Math.floor(0.8 * benchMax) + " lbs"
              : benchStickingPoint === "top-third"
              ? Math.floor(0.875 * benchMax) + " lbs"
              : Math.floor(0.8 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
      ],
    },
    {
      week: "2",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 5,
          reps: 4,
          weight: Math.floor(0.825 * squatMax) + " lbs",
          excercise2: squatStickingPointExercises[squatStickingPoint],
          sets2: 3,
          reps2:
            squatStickingPoint === "bottom-third"
              ? 3
              : squatStickingPoint === "middle-half-up"
              ? 5
              : squatStickingPoint === "top-third"
              ? 6
              : 3,
          weight2:
            squatStickingPoint === "bottom-third"
              ? Math.floor(0.775 * squatMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.85 * squatMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.6 * squatMax) + " lbs"
              : Math.floor(0.775 * squatMax) + " lbs",
          excercise3: "Bench",
          sets3: 5,
          reps3: 4,
          weight3: Math.floor(0.825 * benchMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "2",
          excercise: "Overhead Press",
          sets: 5,
          reps: 4,
          weight: Math.floor(0.825 * overheadPressMax) + " lbs",
          excercise2: "Deadlift",
          sets2: 1,
          reps2: 5,
          weight2: Math.floor(0.875 * deadliftMax) + " lbs",
          excercise3: deadliftStickingPointExercises[deadliftStickingPoint],
          sets3: 3,
          reps3: 3,
          weight3:
            deadliftStickingPoint === "bottom-third"
              ? Math.floor(0.775 * deadliftMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.775 * deadliftMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.925 * deadliftMax) + " lbs"
              : Math.floor(0.775 * deadliftMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "3",
          excercise: "Squat",
          sets: 3,
          reps: 6,
          weight: Math.floor(0.75 * squatMax) + " lbs",
          excercise2: "Bench",
          sets3: 3,
          reps3: 6,
          weight2: Math.floor(0.75 * benchMax) + " lbs",
          excercise3: benchStickingPointExercises[benchStickingPoint],
          sets2: 4,
          reps2: 3,
          weight3:
            benchStickingPoint === "bottom-third"
              ? Math.floor(0.825 * benchMax) + " lbs"
              : benchStickingPoint === "middle-half-up"
              ? Math.floor(0.825 * benchMax) + " lbs"
              : benchStickingPoint === "top-third"
              ? Math.floor(0.9 * benchMax) + " lbs"
              : Math.floor(0.825 * benchMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
      ],
    },
    {
      week: "3",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 5,
          reps: 3,
          weight: Math.floor(0.85 * squatMax) + " lbs",
          excercise2: squatStickingPointExercises[squatStickingPoint],
          sets2: 3,
          reps2:
            squatStickingPoint === "bottom-third"
              ? 3
              : squatStickingPoint === "middle-half-up"
              ? 5
              : squatStickingPoint === "top-third"
              ? 6
              : 3,
          weight2:
            squatStickingPoint === "bottom-third"
              ? Math.floor(0.8 * squatMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.875 * squatMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.625 * squatMax) + " lbs"
              : Math.floor(0.9 * squatMax) + " lbs",
          excercise3: "Bench",
          sets3: 5,
          reps3: 3,
          weight3: Math.floor(0.85 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "2",
          excercise: "Overhead Press",
          sets: 5,
          reps: 3,
          weight: Math.floor(0.85 * overheadPressMax) + " lbs",
          excercise2: "Deadlift",
          sets2: 1,
          reps2: 4,
          weight2: Math.floor(0.9 * deadliftMax) + " lbs",
          excercise3: deadliftStickingPointExercises[deadliftStickingPoint],
          sets3: 3,
          reps3: 3,
          weight3:
            deadliftStickingPoint === "bottom-third"
              ? Math.floor(0.8 * deadliftMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.8 * deadliftMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.95 * deadliftMax) + " lbs"
              : Math.floor(0.8 * deadliftMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "3",
          excercise: "Squat",
          sets: 3,
          reps: 6,
          weight: Math.floor(0.775 * squatMax) + " lbs",
          excercise2: "Bench",
          sets3: 3,
          reps3: 6,
          weight2: Math.floor(0.775 * benchMax) + " lbs",
          excercise3: benchStickingPointExercises[benchStickingPoint],
          sets2: 3,
          reps2: 3,
          weight3:
            benchStickingPoint === "bottom-third"
              ? Math.floor(0.85 * benchMax) + " lbs"
              : benchStickingPoint === "middle-half-up"
              ? Math.floor(0.85 * benchMax) + " lbs"
              : benchStickingPoint === "top-third"
              ? Math.floor(0.925 * benchMax) + " lbs"
              : Math.floor(0.85 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
      ],
    },
    {
      week: "4",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 4,
          reps: 3,
          weight: Math.floor(0.875 * squatMax) + " lbs",
          excercise2: squatStickingPointExercises[squatStickingPoint],
          sets2: 3,
          reps2:
            squatStickingPoint === "bottom-third"
              ? 2
              : squatStickingPoint === "middle-half-up"
              ? 3
              : squatStickingPoint === "top-third"
              ? 6
              : 2,
          weight2:
            squatStickingPoint === "bottom-third"
              ? Math.floor(0.825 * squatMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.9 * squatMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.65 * squatMax) + " lbs"
              : Math.floor(0.825 * squatMax) + " lbs",
          excercise3: "Bench",
          sets3: 4,
          reps3: 3,
          weight3: Math.floor(0.875 * benchMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "2",
          excercise: "Overhead Press",
          sets: 4,
          reps: 3,
          weight: Math.floor(0.875 * overheadPressMax) + " lbs",
          excercise2: "Deadlift",
          sets2: 1,
          reps2: 3,
          weight2: Math.floor(0.925 * deadliftMax) + " lbs",
          excercise3: deadliftStickingPointExercises[deadliftStickingPoint],
          sets3: 3,
          reps3: 3,
          weight3:
            deadliftStickingPoint === "bottom-third"
              ? Math.floor(0.825 * deadliftMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.825 * deadliftMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.975 * deadliftMax) + " lbs"
              : Math.floor(0.825 * deadliftMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "3",
          excercise: "Squat",
          sets: 3,
          reps: 6,
          weight: Math.floor(0.8 * squatMax) + " lbs",
          excercise2: "Bench",
          sets3: 3,
          reps3: 6,
          weight2: Math.floor(0.8 * benchMax) + " lbs",
          excercise3: benchStickingPointExercises[benchStickingPoint],
          sets2: 2,
          reps2: 3,
          weight3:
            benchStickingPoint === "bottom-third"
              ? Math.floor(0.875 * benchMax) + " lbs"
              : benchStickingPoint === "middle-half-up"
              ? Math.floor(0.875 * benchMax) + " lbs"
              : benchStickingPoint === "top-third"
              ? Math.floor(0.95 * benchMax) + " lbs"
              : Math.floor(0.875 * benchMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
      ],
    },
    {
      week: "5",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 3,
          reps: 3,
          weight: Math.floor(0.9 * squatMax) + " lbs",
          excercise2: squatStickingPointExercises[squatStickingPoint],
          sets2: 3,
          reps2:
            squatStickingPoint === "bottom-third"
              ? 2
              : squatStickingPoint === "middle-half-up"
              ? 3
              : squatStickingPoint === "top-third"
              ? 6
              : 2,
          weight2:
            squatStickingPoint === "bottom-third"
              ? Math.floor(0.85 * squatMax) + " lbs"
              : squatStickingPoint === "middle-half-up"
              ? Math.floor(0.925 * squatMax) + " lbs"
              : squatStickingPoint === "top-third"
              ? Math.floor(0.675 * squatMax) + " lbs"
              : Math.floor(0.85 * squatMax) + " lbs",
          excercise3: "Bench",
          sets3: 3,
          reps3: 3,
          weight3: Math.floor(0.9 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "2",
          excercise: "Overhead Press",
          sets: 3,
          reps: 3,
          weight: Math.floor(0.9 * overheadPressMax) + " lbs",
          excercise2: "Deadlift",
          sets2: 1,
          reps2: 2,
          weight2: Math.floor(0.95 * deadliftMax) + " lbs",
          excercise3: "deadlift",
          sets3: 1,
          reps3: 5,
          weight3: Math.floor(0.85 * deadliftMax) + " lbs",
          excercise4: "Rows",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
        {
          day: "3",
          excercise: "Squat",
          sets: 3,
          reps: 6,
          weight: Math.floor(0.825 * squatMax) + " lbs",
          excercise2: "Bench",
          sets3: 3,
          reps3: 6,
          weight2: Math.floor(0.825 * benchMax) + " lbs",
          excercise3: benchStickingPointExercises[benchStickingPoint],
          sets2: 2,
          reps2: 3,
          weight3:
            benchStickingPoint === "bottom-third"
              ? Math.floor(0.9 * benchMax) + " lbs"
              : benchStickingPoint === "middle-half-up"
              ? Math.floor(0.9 * benchMax) + " lbs"
              : benchStickingPoint === "top-third"
              ? Math.floor(0.975 * benchMax) + " lbs"
              : Math.floor(0.9 * benchMax) + " lbs",
          excercise4: "Pulldowns",
          sets4: 3,
          reps4: 12,
          weight4: "RPE 8",
        },
      ],
    },
    {
      week: "6",
      days: [
        {
          day: "1",
          excercise: "Squat",
          sets: 1,
          reps: 3,
          weight: "3 Rep Max Attempt",
          excercise2: "Bench",
          sets2: 1,
          reps2: 3,
          weight2: "3 Rep Max Attempt",
          excercise3: "Rows",
          sets3: 3,
          reps3: 12,
          weight3: "RPE 8",
        },
        {
          day: "2",
          excercise: "Deadlift",
          sets: 1,
          reps: 1,
          weight: "1 Rep Max Attempt",
          excercise2: "Rows",
          sets2: 3,
          reps2: 12,
          weight2: "RPE 8",
        },
      ],
    },
  ];

  return program;
};

export default generateThreeDayProgram;
