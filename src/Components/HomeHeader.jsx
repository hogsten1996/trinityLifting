import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const HomeHeader = () => {
  return (
    <div>
      <div className="grid grid-col-1 lg:grid-cols-3">
        <img
          src="https://www.thebxngclub.com/wp-content/uploads/2022/06/powerlifting-1.jpg"
          alt=""
          className="object-cover w-full h-[200px] md:h-[300px]"
        />
        <img
          src="https://www.trainheroic.com/wp-content/uploads/2022/02/Bench-press.jpg"
          alt=""
          className="hidden lg:block object-cover w-full h-[300px]"
        />
        <img
          src="https://www.healthdigest.com/img/gallery/how-powerlifting-is-different-from-bodybuilding/l-intro-1656797854.jpg"
          alt=""
          className="hidden lg:block object-cover w-full h-[300px]"
        />
      </div>
      <div>
        <h1 className="text-[40px] lg:text-[90px] font-extrabold text-center my-5">
          STRENGTH IS <b className="text-red-700">EARNED</b>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[95%] mx-auto gap-5 md:max-w-[80%]">
        <Link to="/allarticles" onClick={scrollToTop}>
          <div className="hover:opacity-80 cursor-pointer">
            <h1 className="text-2xl font-extrabold text-red-700 bg-black p-2">
              Articles
            </h1>
            <img
              src="https://miro.medium.com/v2/resize:fit:1024/0*UkQCo1eLsXjoXn4v.jpg"
              alt=""
              className="object-cover w-full h-[250px]"
            />
          </div>
        </Link>
        <Link to="/programs" onClick={scrollToTop}>
          {" "}
          <div className="hover:opacity-80 cursor-pointer">
            <h1 className="text-2xl font-extrabold text-red-700 bg-black p-2">
              Free Programs
            </h1>
            <img
              src="https://simplifaster.com/wp-content/uploads/2018/02/Full-Squat.jpg"
              alt=""
              className="object-cover w-full h-[250px]"
            />
          </div>
        </Link>
        <div className="hover:opacity-80 cursor-pointer">
          <h1 className="text-2xl font-extrabold text-red-700 bg-black p-2">
            Online Coaching
          </h1>
          <img
            src="https://www.bodybuilding.com/images/2021/april/spotting-101-how-to-spot-the-bench-squat-and-dumbbell-header-960x540.jpg"
            alt=""
            className="object-cover w-full h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
