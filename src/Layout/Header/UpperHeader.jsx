import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaFlag, FaUser, FaHeart, FaCartPlus } from "react-icons/fa";
import MainLogo from "../../Assets/svg/mainLogo.svg";

const headerElements = [
  {
    title: "Rings",
    path: "/rings",
  },
  {
    title: "Earrings",
    path: "/earrings",
  },
  {
    title: "Bracelets & Bangles",
    path: "/bracelets-bangles",
  },
  {
    title: "Solitaires",
    path: "/solitaires",
  },
  {
    title: "Mangalsutras",
    path: "/mangalsutras",
  },
  {
    title: "Necklaces",
    path: "/necklaces",
  },
  //   {
  //     title: "More Jewellery",
  //     path: "/more-jewellery",
  //   },
  //   {
  //     title: "Gifting",
  //     path: "/gifting",
  //   },
  //   {
  //     title: "Find Store",
  //     path: "/find-store",
  //   },
];

export const UpperHeader = () => {
  const [showFirstSentence, setShowFirstSentence] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstSentence((prevState) => !prevState);
    }, 3000); // 3-second interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: "#4F3267" }}
        className="main-header text-white p-5 text-center relative overflow-hidden"
      >
        <div className="upper-header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full transition-transform duration-1000 ease-in-out">
          <p
            className={`upper-heading-text m-0 opacity-0 transition-opacity duration-1000 ease-in-out transform ${
              showFirstSentence
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            {showFirstSentence
              ? "CaratLane - A TATA Product"
              : "Introducing CaratLane PoP! 9=10 | Plan your purchase here"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full border pr-2 pl-2 pt-4 pb-4">
        <div className="w-[60%] flex items-center">
          <div>
            {/* <h5>LOGO</h5> */}
            <img src={MainLogo} alt="main-logo" />
          </div>

          <div
            style={{ width: "100%" }}
            className="header-routes ml-4 flex items-center"
          >
            {headerElements.map((element, index) => {
              return (
                <div
                  style={{ width: "40%" }}
                  className="mr-2 ml-2 text-xs font-medium text-[#4F3267] text-[14px]"
                >
                  <NavLink to={element.path}>{element.title}</NavLink>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[50%] flex items-center justify-evenly">
          <div class="flex items-center bg-white pl-3 outline outline-1 -outline-offset-1 outline-pink-500 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 rounded-xl">
            <input
              type="text"
              name="price"
              id="price"
              className="w-[200px] block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              placeholder="Search"
            />
            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
              <button
                className="border border-pink-500 h-[45px] w-[45px]  flex justify-center items-center rounded-e-xl"
                style={{
                  background:
                    "linear-gradient(to right, #de57e5 0%, #8863fb 100%)",
                }}
              >
                <IoMdSearch className="text-2xl text-white" />
              </button>
            </div>
          </div>

          <p className="text-xs">
            <span className="text-gray-500">Delivery & Stores</span>
            <br />
            <span className="text-pink-400 font-semibold">Enter Pincode</span>
          </p>

          <div>
            <FaFlag className="text-2xl" />
          </div>

          <div>
            <FaUser className="text-2xl" />
          </div>

          <div>
            <FaHeart className="text-2xl" />
          </div>

          <div>
            <FaCartPlus className="text-2xl" />
          </div>
        </div>
      </div>

      
    </>
  );
};
