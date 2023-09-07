import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGuess } from "../../store/guessSlice";

export default function Game() {
  const name = useSelector((state) => state.username.name);
  const guess = useSelector((state) => state.guess.guess);
  const level = useSelector((state) => state.level.level);
  const [error, setError] = useState(false);
  let range = "";

  const numericLevel = parseInt(level, 10); // Parse level as a number

  if (numericLevel === 1) {
    range = "(0-10)";
  } else if (numericLevel === 2) {
    range = "(0-50)";
  } else {
    range = "(0-100)";
  }
  const numericGuess = parseInt(guess, 10); // Parse guess as a number

  useEffect(() => {
    const numericGuess = parseInt(guess, 10); // Parse guess as a number

    if (numericLevel === 1 && (numericGuess > 10 || numericGuess < 0)) {
      setError(true);
    } else if (numericLevel === 2 && (numericGuess > 50 || numericGuess < 0)) {
      setError(true);
    } else if (numericLevel === 3 && (numericGuess > 100 || numericGuess < 0)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [guess, numericLevel]);

  let msg = "";
  error ? (msg = "Please Enter a valid number in the given range") : (msg = "");
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(setGuess(event.target.value));
  }
  let flag = false;

  if (guess.length !== 0) {
    flag = true;
  }
  function handleSubmit() {
    window.location.href = "/result";
  }
  return (
    <div className="h-[100vh] bg-black/80 flex items-center justify-center text-white text-center">
      <div className="space-y-3 sm:space-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Hey! {name}🤞</h1>
        <h1 className="text-3xl sm:text-4xl font-bold">
          Enter Any Guess Number between {range}
        </h1>
        <div className=" py-7 sm:py-5">
          <input
            type="number"
            name="guess"
            value={guess}
            id="name"
            className="sm:w-full w-[90%] text-2xl sm:text-4xl rounded-md  border-2 border-black text-black p-2 outline-none"
            onChange={handleChange}
          />
        </div>
        <h1 className="text-4xl text-red-500 font-bold">{msg}</h1>
        <button
          type="button"
          className="bg-blue-900 text-xl sm:text-2xl px-2 py-1 sm:px-5 sm:py-3 rounded-md sm:my-5"
          disabled={!flag}
          title="Please Enter any Number between the given range"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
