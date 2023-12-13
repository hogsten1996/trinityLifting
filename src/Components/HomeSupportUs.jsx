import React from "react";

const HomeSupportUs = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between max-w-[95%] mx-auto lg:max-w-[80%] my-5">
      <div className="md:w-1/3 my-5 text-center md:text-left">
        <h1 className="text-2xl font-extrabold">
          Support Us By Purchasing Our Apparel
        </h1>
        <p className="text-xl text-red-700 font-bold">
          We love to produce free content so people can continue to get
          stronger both physically, mentally, and spiritually. Please consider
          buying some of our merch or purchasing some online coaching to help
          support Trinity Lifting.
        </p>
      </div>
      <div className="md:w-1/3 my-5 text-center">
        <img
          src="https://m.media-amazon.com/images/I/A1N8k6EkWYL._CLa%7C2140%2C2000%7C91FdYtQsIaL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
          alt=""
          className="w-full md:w-[80%] mx-auto h-[220px] md:h-[300px] object-fill hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="md:w-1/3 my-5 text-center">
        <img
          src="https://m.media-amazon.com/images/I/A1oGjDIl4cL._CLa%7C2140%2C2000%7C91SOQWs3FCL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png"
          alt=""
          className="w-full md:w-[80%] mx-auto h-[220px] md:h-[300px] object-fill hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomeSupportUs;

