import React from "react";
import generateThreeDayProgram from "../utils/threeDayProgramLogic.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Helper function to round a number to the nearest 5
const roundToNearest5 = (equation) => {
  try {
    const numericValue = parseFloat(equation.match(/-?\d+\.?\d*/)[0]);
    const roundedValue = Math.round(numericValue / 5) * 5;
    return `${roundedValue} lbs`;
  } catch (error) {
    console.error("Error rounding to nearest 5:", equation, error);
    return "N/A";
  }
};

const ThreeDayProgram = ({
  squatMax,
  benchMax,
  deadliftMax,
  overheadPressMax,
  squatStickingPoint,
  benchStickingPoint,
  deadliftStickingPoint,
}) => {
  const trainingProgram = generateThreeDayProgram(
    squatMax,
    benchMax,
    deadliftMax,
    overheadPressMax,
    squatStickingPoint,
    benchStickingPoint,
    deadliftStickingPoint
  );

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();

    pdf.text("3 Day Split (6 Weeks)", 20, 20);
    let yOffset = 30;

    trainingProgram.forEach((week, index) => {
      pdf.text(`Week ${week.week}`, 20, yOffset);
      yOffset += 10;

      const tableData = week.days.flatMap((day) => {
        const rowData = [
          [
            `Day ${day.day}`,
            day.excercise,
            day.sets,
            day.reps,
            roundToNearest5(day.weight),
          ],
        ];

        if (day.excercise2) {
          rowData.push([
            "",
            day.excercise2,
            day.sets2,
            day.reps2,
            roundToNearest5(day.weight2),
          ]);
        }

        if (day.excercise3) {
          rowData.push([
            "",
            day.excercise3,
            day.sets3,
            day.reps3,
            roundToNearest5(day.weight3),
          ]);
        }

        if (day.excercise4) {
          rowData.push(["", day.excercise4, day.sets4, day.reps4, "N/A"]);
        }

        return rowData;
      });

      pdf.autoTable({
        startY: yOffset,
        head: [["Day", "Exercise", "Sets", "Reps", "Weight"]],
        body: tableData,
      });

      yOffset = pdf.previousAutoTable.finalY + 10;
    });

    pdf.save("3DayProgram.pdf");
  };

  return (
    <div className="flex justify-center max-w-[95%] mx-auto xl:w-[80%]">
      {trainingProgram.length > 0 && (
        <div>
          <button
            onClick={handleDownloadPDF}
            className="my-5 bg-black text-red-700 py-1 px-2 rounded-xl font-bold hover:text-white hover:bg-red-700"
          >
            Download as PDF
          </button>
          <h3 className="text-3xl font-extrabold text-center my-6">
            Intro Strength
          </h3>
          <div className="flex flex-wrap">
            {trainingProgram.map((week, index) => (
              <div
                key={`week${week.week}`}
                className="w-full md:1/2 lg:w-1/2 mb-8"
              >
                <h4 className="text-2xl font-bold mb-3">Week {week.week}</h4>
                <table className="table-auto mx-auto">
                  <thead>
                    <tr>
                      <th className="sm:px-1 lg:px-2 py-2 md:text-xl">Day</th>
                      <th className="sm:px-1 lg:px-2 py-2 md:text-xl">
                        Exercise
                      </th>
                      <th className="sm:px-1 lg:px-2 py-2 md:text-xl">Sets</th>
                      <th className="sm:px-1 lg:px-2 py-2 md:text-xl">Reps</th>
                      <th className="sm:px-1 lg:px-2 py-2 md:text-xl">
                        Weight
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {week.days.map((day) => (
                      <React.Fragment key={`day${day.day}`}>
                        <tr>
                          <td className="border sm:px-1 lg:px-2 py-2 font-bold border-solid border-gray-400">
                            Day {day.day}
                          </td>
                          <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                            {day.excercise}
                          </td>
                          <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                            {day.sets}
                          </td>
                          <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                            {day.reps}
                          </td>
                          <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                            {roundToNearest5(day.weight)}
                          </td>
                        </tr>
                        {day.excercise2 && (
                          <tr>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400"></td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.excercise2}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.sets2}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.reps2}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {roundToNearest5(day.weight2)}
                            </td>
                          </tr>
                        )}
                        {day.excercise3 && (
                          <tr>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400"></td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.excercise3}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.sets3}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.reps3}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {roundToNearest5(day.weight3)}
                            </td>
                          </tr>
                        )}
                        {day.excercise4 && (
                          <tr>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400"></td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.excercise4}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.sets4}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              {day.reps4}
                            </td>
                            <td className="border sm:px-1 lg:px-2 py-2 font-semibold border-solid border-gray-400">
                              N/A
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDayProgram;
