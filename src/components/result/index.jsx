import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGuess } from "../../store/guessSlice";
import { setLevel } from "../../store/levelSlice";
import { setName } from "../../store/nameSlice";

export default function Result({ number, guess }) {
  // Parse number and guess into integers
  const parsedNumber = parseInt(number);
  const parsedGuess = parseInt(guess);
  const namee = useSelector((state) => state.username.name);
  const level = useSelector((state) => state.level.level);
  const guesss = useSelector((state) => state.guess.guess);
  const numericLevel = parseInt(level, 10); // Parse level as a number
  const dispatch = useDispatch();
  const [guessed, setGuessed] = useState("no");
  let digit = 0;
  if (numericLevel === 1) {
    digit = 10;
  } else if (numericLevel === 2) {
    digit = 50;
  } else {
    digit = 100;
  }

  function handleExit() {
    dispatch(setName(""));
    dispatch(setGuess(""));
    dispatch(setLevel(null));
  }

  useEffect(() => {
    if (parsedNumber === parsedGuess) {
      setGuessed("Correct");
    } else if (Math.abs(parsedNumber - parsedGuess) <= parseInt(digit / 5)) {
      setGuessed("very close");
    } else if (Math.abs(parsedNumber - parsedGuess) <= parseInt(digit / 3)) {
      setGuessed("close");
    } else if (Math.abs(parsedNumber - parsedGuess) <= parseInt(digit / 2)) {
      setGuessed("far");
    }
  }, [parsedNumber, parsedGuess]);

  let msg = "";
  let styling = "";
  if (guessed === "Correct") {
    styling = "text-4xl text-green-500 font-semibold";
    msg = "Congratulations! You guessed the correct number😎😎";
  } else if (guessed === "very close") {
    styling = "text-2xl sm:text-4xl text-orange-500 font-semibold";
    msg = "Awwww! You just missed by margins🥹🥹";
  } else if (guessed === "close") {
    styling = "text-2xl sm:text-4xl text-red-500 font-semibold";
    msg = "This was just close enough🥲🥲";
  } else {
    styling = "text-2xl sm:text-4xl text-red-700 font-semibold";
    msg = "Your guess was far away🙄🙄";
  }

  return (
    <div className="h-[100vh] bg-black/80 flex items-center justify-center text-black text-center">
      <div className="space-y-2 sm:space-y-5 border-4 border-black rounded-lg p-8 bg-slate-200">
        <h3 className="text-2xl sm:text-4xl">
          Hello <span className="text-yellow-500 font-extrabold">{namee}</span>{" "}
          ,
        </h3>
        <h3 className="text-2xl sm:text-4xl">Here's your result</h3>
        <div className="py-6 sm:py-10 space-y-2 sm:space-y-3">
          <h3 className="text-2xl sm:text-4xl">You Entered: {parsedGuess}</h3>
          <h3 className="text-2xl sm:text-4xl">
            Correct Number: {parsedNumber}
          </h3>
        </div>
        <h3 className={styling}>{msg}</h3>
        <div className="py-5">
          <a href="/">
            <button
              type="button"
              className="bg-blue-900 text-xl sm:text-2xl text-white px-2 py-1 sm:px-5 sm:py-3  rounded-md"
              onClick={handleExit}
            >
              Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
