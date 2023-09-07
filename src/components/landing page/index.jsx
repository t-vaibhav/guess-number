import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../store/nameSlice";
import { setLevel } from "../../store/levelSlice";

export default function Home() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.username.name);
  const level = useSelector((state) => state.level.level);
  function handleChange(event) {
    const newName = event.target.value;
    dispatch(setName(newName));
  }
  function handleLevel(event) {
    console.log(event.target.value);
    dispatch(setLevel(event.target.value));
  }

  console.log("name: ", name.length);
  console.log("level: ", level);

  let flag = false;
  if (name.length !== 0 && level !== null) {
    flag = true;
  }
  console.log("flag: ", flag);
  function handleNext() {
    window.location.href = "/game";
  }
  return (
    <div className="h-[100vh] bg-black/80 flex items-center justify-center text-white text-center">
      <div className="space-y-3 sm:space-y-5">
        <h1 className="text-3xl sm:text-4xl font-semibold">Hello Friend!</h1>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Please Enter Your Name!
        </h1>
        <div className="py-5">
          <input
            type="text"
            semi
            name="name"
            value={name}
            id="name"
            className="sm:w-full w-[90%] text-2xl sm:text-4xl rounded-md  border-2 border-black text-black p-2 outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center px-2">
          <div className="text-xl sm:text-2xl space-x-[10px] sm:space-x-5 flex">
            <div>Select Level:</div>
            <div>
              <input
                type="radio"
                name="level"
                id="easy"
                value={1}
                onChange={handleLevel}
              />
              <label htmlFor="easy" className="pl-1">
                Easy
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="level"
                id="med"
                onChange={handleLevel}
                value={2}
              />
              <label htmlFor="med" className="pl-1">
                Medium
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="level"
                id="hard"
                onChange={handleLevel}
                value={3}
              />
              <label htmlFor="hard" className="pl-1">
                Hard
              </label>
            </div>
          </div>
        </div>
        <button
          disabled={!flag}
          title="Please Enter your name and select level"
          type="button"
          className="bg-blue-900 text-xl sm:text-2xl sm:px-5 sm:py-2 px-2 py-1 rounded-md my-5 "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
