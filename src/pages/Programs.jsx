import React from "react";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="max-w-[95%] mt-4 mx-auto text-gray-900 lg:max-w-[80%]">
      <h1 className="text-3xl font-bold text-center">Free Training Programs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-xl font-bold">Intro Strength</h1>
          <p className="text-lg font-semibold">
            6 Week Program - 3 Days Per Week
          </p>
          <Link to='/threedayprogramform'>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg"
                alt=""
                className="rounded-2xl w-full h-[300px] object-cover transition-transform transform-gpu hover:scale-110 hover:opacity-80"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-xl font-bold">
            Bench Specialist <b className="text-red-800">(Coming Soon)</b>
          </h1>
          <p className="text-lg font-semibold">
            8 Week Program - 2 Days Per Week
          </p>
          <Link>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/01/Advanced-bench-press-program.jpg?fit=1600%2C1067&ssl=1"
                alt=""
                className="rounded-2xl w-full h-[300px] object-cover transition-transform transform-gpu hover:scale-110 hover:opacity-80"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-xl font-bold">
            Big Boy Squats <b className="text-red-800">(Coming Soon)</b>
          </h1>
          <p className="text-lg font-semibold">
            8 Week Program - 4 Days Per Week
          </p>
          <Link>
            <div className="overflow-hidden  rounded-2xl">
              <img
                src="https://i.pinimg.com/originals/bb/2c/bc/bb2cbcbe5ff3f4edf3aa1b9c9cf251c1.jpg"
                alt=""
                className="rounded-2xl w-full h-[300px] object-cover transition-transform transform-gpu hover:scale-110 hover:opacity-80"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;


